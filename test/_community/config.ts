import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'node:url'
import path from 'path'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { devUser } from '../credentials.js'
import { ComparisonsCollection, comparisonsSlug } from './collections/Comparisons/index.js'
import { MediaCollection } from './collections/Media/index.js'
import { PostsCollection, postsSlug } from './collections/Posts/index.js'
import { MenuGlobal } from './globals/Menu/index.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [PostsCollection, MediaCollection, ComparisonsCollection],
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  globals: [
    // ...add more globals here
    MenuGlobal,
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    await payload.create({
      collection: postsSlug,
      data: {
        title: 'example post',
      },
    })

    // Create an example comparison page
    await payload.create({
      collection: comparisonsSlug,
      data: {
        title: 'Bitcoin vs Ethereum',
        slug: 'bitcoin-vs-ethereum',
        intro: [
          {
            type: 'paragraph',
            children: [{ text: 'A comprehensive comparison between Bitcoin and Ethereum.' }],
          },
        ],
        sections: [
          {
            heading: 'Technology',
            content: [
              {
                type: 'paragraph',
                children: [
                  { text: 'Comparing the underlying technologies of both cryptocurrencies.' },
                ],
              },
            ],
          },
        ],
        published: true,
      },
    })
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
