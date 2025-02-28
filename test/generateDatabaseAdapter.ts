import fs from 'fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const allDatabaseAdapters: Record<string, string> = {
  mongodb: `
  import { mongooseAdapter } from '@payloadcms/db-mongodb'

  export const databaseAdapter = mongooseAdapter({
    ensureIndexes: true,
    url:
      process.env.MONGODB_MEMORY_SERVER_URI ||
      process.env.DATABASE_URI ||
      'mongodb://127.0.0.1/payloadtests',
    collation: {
      strength: 1,
    },
  })`,
  postgres: `
  import { postgresAdapter } from '@payloadcms/db-postgres'

  export const databaseAdapter = postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://127.0.0.1:5432/payloadtests',
    },
  })`,
  'postgres-custom-schema': `
  import { postgresAdapter } from '@payloadcms/db-postgres'

  export const databaseAdapter = postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://127.0.0.1:5432/payloadtests',
    },
    schemaName: 'custom',
  })`,
  'postgres-uuid': `
    import { postgresAdapter } from '@payloadcms/db-postgres'

  export const databaseAdapter = postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://127.0.0.1:5432/payloadtests',
    },
  })`,
  sqlite: `
  import { sqliteAdapter } from '@payloadcms/db-sqlite'

  export const databaseAdapter = sqliteAdapter({
    client: {
      url: process.env.SQLITE_URL || 'file:./payloadtests.db',
    },
    autoIncrement: true
  })`,
  'sqlite-uuid': `
  import { sqliteAdapter } from '@payloadcms/db-sqlite'

  export const databaseAdapter = sqliteAdapter({
    idType: 'uuid',
    client: {
      url: process.env.SQLITE_URL || 'file:./payloadtests.db',
    },
  })`,
  supabase: `
  import { postgresAdapter } from '@payloadcms/db-postgres'

  export const databaseAdapter = postgresAdapter({
    pool: {
      connectionString:
        process.env.POSTGRES_URL || 'postgresql://postgres:postgres@127.0.0.1:54322/postgres',
    },
  })`,
  cosmosdb: `
  import { mongooseAdapter } from '@payloadcms/db-mongodb'

  export const databaseAdapter = mongooseAdapter({
    ensureIndexes: true,
    transactionOptions: false,
    url: process.env.COSMOSDB_CONNECTION_STRING
    options: {
      tls: true,
      tlsCAFile: process.env.COSMOSDB_CA_CERT || '/usr/local/share/ca-certificates/cosmos_emulator.cert',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  })`,
}

/**
 * Write to databaseAdapter.ts
 */
export function generateDatabaseAdapter(dbAdapter: string) {
  const databaseAdapter = allDatabaseAdapters[dbAdapter]
  if (!databaseAdapter) {
    throw new Error(`Unknown database adapter: ${dbAdapter}`)
  }
  fs.writeFileSync(
    path.resolve(dirname, 'databaseAdapter.js'),
    `
  // DO NOT MODIFY. This file is automatically generated by the test suite.

  ${databaseAdapter}
  `,
  )

  console.log('Wrote', dbAdapter, 'db adapter')
  return databaseAdapter
}
