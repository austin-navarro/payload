import { fileURLToPath } from 'node:url'
import path from 'path'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { Media } from './collections/Media/index.js'
import { Posts } from './collections/Posts/index.js'
import { seed } from './seed/index.js'

export default buildConfigWithDefaults({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  folders: {
    enabled: true,
    collections: {
      posts: {},
      media: {},
    },
    debug: true,
  },
  collections: [Posts, Media],
  globals: [
    {
      slug: 'global',
      fields: [],
    },
  ],
  // onInit: seed,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
