import type { PaginatedDocs, User } from '../../index.js'
import type { Payload } from '../../types/index.js'
import type { FolderInterface } from '../types.js'

import { foldersSlug } from '../constants.js'

type GetSubfoldersArgs = {
  folderID?: null | number | string
  payload: Payload
  user?: User
}
export const getFolderSubfolders = async ({
  folderID,
  payload,
  user,
}: GetSubfoldersArgs): Promise<
  {
    relationTo: string
    value: FolderInterface
  }[]
> => {
  if (folderID) {
    const subfolderDocs = (await payload.find({
      collection: foldersSlug,
      joins: {
        documentsAndFolders: {
          limit: 1000,
          sort: 'name',
          where: {
            relationTo: {
              equals: foldersSlug,
            },
          },
        },
      },
      limit: 1,
      user,
      where: {
        id: {
          equals: folderID,
        },
      },
    })) as PaginatedDocs<FolderInterface>

    return subfolderDocs?.docs[0]?.documentsAndFolders?.docs || []
  }

  const orphanedFolders = (await payload.find({
    collection: foldersSlug,
    limit: 1000,
    sort: 'name',
    where: {
      _parentFolder: {
        exists: false,
      },
    },
  })) as PaginatedDocs<FolderInterface>

  const orphanedDocsWithRelation = orphanedFolders?.docs.map((folder) => ({
    relationTo: foldersSlug,
    value: folder,
  }))

  return orphanedDocsWithRelation || []
}
