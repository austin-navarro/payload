import * as migration_20250303_013913_initial from './20250303_013913_initial'

export const migrations = [
  {
    up: migration_20250303_013913_initial.up,
    down: migration_20250303_013913_initial.down,
    name: '20250303_013913_initial',
  },
]
