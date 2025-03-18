/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    posts: Post;
    drafts: Draft;
    'default-sort': DefaultSort;
    localized: Localized;
    orderable: Orderable;
    'orderable-join': OrderableJoin;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    'orderable-join': {
      orderableJoinField1: 'orderable';
      orderableJoinField: 'orderable';
      nonOrderableJoinField: 'orderable';
    };
  };
  collectionsSelect: {
    posts: PostsSelect<false> | PostsSelect<true>;
    drafts: DraftsSelect<false> | DraftsSelect<true>;
    'default-sort': DefaultSortSelect<false> | DefaultSortSelect<true>;
    localized: LocalizedSelect<false> | LocalizedSelect<true>;
    orderable: OrderableSelect<false> | OrderableSelect<true>;
    'orderable-join': OrderableJoinSelect<false> | OrderableJoinSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: 'en' | 'nb';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  text?: string | null;
  number?: number | null;
  number2?: number | null;
  group?: {
    text?: string | null;
    number?: number | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "drafts".
 */
export interface Draft {
  id: string;
  text?: string | null;
  number?: number | null;
  number2?: number | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "default-sort".
 */
export interface DefaultSort {
  id: string;
  text?: string | null;
  number?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized".
 */
export interface Localized {
  id: string;
  text?: string | null;
  number?: number | null;
  number2?: number | null;
  group?: {
    text?: string | null;
    number?: number | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orderable".
 */
export interface Orderable {
  id: string;
  _order?: string | null;
  title?: string | null;
  orderableField?: (string | null) | OrderableJoin;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orderable-join".
 */
export interface OrderableJoin {
  id: string;
  _order?: string | null;
  title?: string | null;
  orderableJoinField1?: {
    docs?: (string | Orderable)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  orderableJoinField?: {
    docs?: (string | Orderable)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  nonOrderableJoinField?: {
    docs?: (string | Orderable)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'drafts';
        value: string | Draft;
      } | null)
    | ({
        relationTo: 'default-sort';
        value: string | DefaultSort;
      } | null)
    | ({
        relationTo: 'localized';
        value: string | Localized;
      } | null)
    | ({
        relationTo: 'orderable';
        value: string | Orderable;
      } | null)
    | ({
        relationTo: 'orderable-join';
        value: string | OrderableJoin;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  text?: T;
  number?: T;
  number2?: T;
  group?:
    | T
    | {
        text?: T;
        number?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "drafts_select".
 */
export interface DraftsSelect<T extends boolean = true> {
  text?: T;
  number?: T;
  number2?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "default-sort_select".
 */
export interface DefaultSortSelect<T extends boolean = true> {
  text?: T;
  number?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized_select".
 */
export interface LocalizedSelect<T extends boolean = true> {
  text?: T;
  number?: T;
  number2?: T;
  group?:
    | T
    | {
        text?: T;
        number?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orderable_select".
 */
export interface OrderableSelect<T extends boolean = true> {
  _order?: T;
  title?: T;
  orderableField?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orderable-join_select".
 */
export interface OrderableJoinSelect<T extends boolean = true> {
  _order?: T;
  title?: T;
  orderableJoinField1?: T;
  orderableJoinField?: T;
  nonOrderableJoinField?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}