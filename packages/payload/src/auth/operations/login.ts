import jwt from 'jsonwebtoken'

import type {
  AuthOperationsFromCollectionSlug,
  Collection,
  DataFromCollectionSlug,
} from '../../collections/config/types.js'
import type { CollectionSlug } from '../../index.js'
import type { PayloadRequest, Where } from '../../types/index.js'
import type { User } from '../types.js'

import { buildAfterOperation } from '../../collections/operations/utils.js'
import { AuthenticationError, LockedAuth, ValidationError } from '../../errors/index.js'
import { afterRead } from '../../fields/hooks/afterRead/index.js'
import { commitTransaction } from '../../utilities/commitTransaction.js'
import { initTransaction } from '../../utilities/initTransaction.js'
import { killTransaction } from '../../utilities/killTransaction.js'
import sanitizeInternalFields from '../../utilities/sanitizeInternalFields.js'
import { getFieldsToSign } from '../getFieldsToSign.js'
import isLocked from '../isLocked.js'
import { authenticateLocalStrategy } from '../strategies/local/authenticate.js'
import { incrementLoginAttempts } from '../strategies/local/incrementLoginAttempts.js'
import { resetLoginAttempts } from '../strategies/local/resetLoginAttempts.js'

export type Result = {
  exp?: number
  token?: string
  user?: User
}

export type Arguments<TSlug extends CollectionSlug> = {
  collection: Collection
  data: AuthOperationsFromCollectionSlug<TSlug>['login']
  depth?: number
  overrideAccess?: boolean
  req: PayloadRequest
  showHiddenFields?: boolean
}

export const loginOperation = async <TSlug extends CollectionSlug>(
  incomingArgs: Arguments<TSlug>,
): Promise<{ user: DataFromCollectionSlug<TSlug> } & Result> => {
  let args = incomingArgs

  try {
    const shouldCommit = await initTransaction(args.req)

    // /////////////////////////////////////
    // beforeOperation - Collection
    // /////////////////////////////////////

    await args.collection.config.hooks.beforeOperation.reduce(async (priorHook, hook) => {
      await priorHook

      args =
        (await hook({
          args,
          collection: args.collection?.config,
          context: args.req.context,
          operation: 'login',
          req: args.req,
        })) || args
    }, Promise.resolve())

    const {
      collection: { config: collectionConfig },
      data,
      depth,
      overrideAccess,
      req,
      req: {
        fallbackLocale,
        locale,
        payload,
        payload: { secret },
      },
      showHiddenFields,
    } = args

    // /////////////////////////////////////
    // Login
    // /////////////////////////////////////

    let user
    const { email: unsanitizedEmail, password } = data
    const loginWithUsername = collectionConfig.auth.loginWithUsername

    const sanitizedEmail =
      typeof unsanitizedEmail !== 'string' ? null : unsanitizedEmail.toLowerCase().trim()
    const username = 'username' in data && data.username

    const canLoginWithUsername = Boolean(loginWithUsername)
    const canLoginWithEmail = !loginWithUsername || loginWithUsername.allowEmailLogin

    // cannot login with email, did not provide username
    if (!canLoginWithEmail && !username) {
      throw new ValidationError({
        collection: collectionConfig.slug,
        errors: [{ field: 'username', message: req.i18n.t('validation:required') }],
      })
    }

    // cannot login with username, did not provide email
    if (!canLoginWithUsername && !sanitizedEmail) {
      throw new ValidationError({
        collection: collectionConfig.slug,
        errors: [{ field: 'email', message: req.i18n.t('validation:required') }],
      })
    }

    // can login with either email or username, did not provide either
    if (!username && !sanitizedEmail) {
      throw new ValidationError({
        collection: collectionConfig.slug,
        errors: [
          { field: 'email', message: req.i18n.t('validation:required') },
          { field: 'username', message: req.i18n.t('validation:required') },
        ],
      })
    }

    // did not provide password for login
    if (typeof password !== 'string' || password.trim() === '') {
      throw new ValidationError({
        collection: collectionConfig.slug,
        errors: [{ field: 'password', message: req.i18n.t('validation:required') }],
      })
    }

    let whereConstraint: Where = {}
    const emailConstraint: Where = {
      email: {
        equals: sanitizedEmail,
      },
    }
    const usernameConstraint: Where = {
      username: {
        equals: username,
      },
    }

    if (canLoginWithEmail && canLoginWithUsername && (username || sanitizedEmail)) {
      if (username) {
        whereConstraint = {
          or: [
            usernameConstraint,
            {
              email: {
                equals: username,
              },
            },
          ],
        }
      } else {
        whereConstraint = {
          or: [
            emailConstraint,
            {
              username: {
                equals: sanitizedEmail,
              },
            },
          ],
        }
      }
    } else if (canLoginWithEmail && sanitizedEmail) {
      whereConstraint = emailConstraint
    } else if (canLoginWithUsername && username) {
      whereConstraint = usernameConstraint
    }

    user = await payload.db.findOne<any>({
      collection: collectionConfig.slug,
      req,
      where: whereConstraint,
    })

    if (!user || (args.collection.config.auth.verify && user._verified === false)) {
      throw new AuthenticationError(req.t, Boolean(canLoginWithUsername && username))
    }

    if (user && isLocked(user.lockUntil)) {
      throw new LockedAuth(req.t)
    }

    const authResult = await authenticateLocalStrategy({ doc: user, password })

    user = sanitizeInternalFields(user)

    const maxLoginAttemptsEnabled = args.collection.config.auth.maxLoginAttempts > 0

    if (!authResult) {
      if (maxLoginAttemptsEnabled) {
        await incrementLoginAttempts({
          collection: collectionConfig,
          doc: user,
          payload: req.payload,
          req,
        })
      }

      if (shouldCommit) await commitTransaction(req)

      throw new AuthenticationError(req.t)
    }

    if (maxLoginAttemptsEnabled) {
      await resetLoginAttempts({
        collection: collectionConfig,
        doc: user,
        payload: req.payload,
        req,
      })
    }

    const fieldsToSign = getFieldsToSign({
      collectionConfig,
      email: sanitizedEmail,
      user,
    })

    // /////////////////////////////////////
    // beforeLogin - Collection
    // /////////////////////////////////////

    await collectionConfig.hooks.beforeLogin.reduce(async (priorHook, hook) => {
      await priorHook

      user =
        (await hook({
          collection: args.collection?.config,
          context: args.req.context,
          req: args.req,
          user,
        })) || user
    }, Promise.resolve())

    const token = jwt.sign(fieldsToSign, secret, {
      expiresIn: collectionConfig.auth.tokenExpiration,
    })

    req.user = user

    // /////////////////////////////////////
    // afterLogin - Collection
    // /////////////////////////////////////

    await collectionConfig.hooks.afterLogin.reduce(async (priorHook, hook) => {
      await priorHook

      user =
        (await hook({
          collection: args.collection?.config,
          context: args.req.context,
          req: args.req,
          token,
          user,
        })) || user
    }, Promise.resolve())

    // /////////////////////////////////////
    // afterRead - Fields
    // /////////////////////////////////////

    user = await afterRead({
      collection: collectionConfig,
      context: req.context,
      depth,
      doc: user,
      draft: undefined,
      fallbackLocale,
      global: null,
      locale,
      overrideAccess,
      req,
      showHiddenFields,
    })

    // /////////////////////////////////////
    // afterRead - Collection
    // /////////////////////////////////////

    await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
      await priorHook

      user =
        (await hook({
          collection: args.collection?.config,
          context: req.context,
          doc: user,
          req,
        })) || user
    }, Promise.resolve())

    // /////////////////////////////////////
    // afterRead - Collection
    // /////////////////////////////////////

    await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
      await priorHook

      user =
        (await hook({
          collection: args.collection?.config,
          context: req.context,
          doc: user,
          req,
        })) || user
    }, Promise.resolve())

    let result: { user: DataFromCollectionSlug<TSlug> } & Result = {
      exp: (jwt.decode(token) as jwt.JwtPayload).exp,
      token,
      user,
    }

    // /////////////////////////////////////
    // afterOperation - Collection
    // /////////////////////////////////////

    result = await buildAfterOperation({
      args,
      collection: args.collection?.config,
      operation: 'login',
      result,
    })

    // /////////////////////////////////////
    // Return results
    // /////////////////////////////////////

    if (shouldCommit) await commitTransaction(req)

    return result
  } catch (error: unknown) {
    await killTransaction(args.req)
    throw error
  }
}
