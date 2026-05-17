import * as migration_20260517_142800_initial from './20260517_142800_initial';

export const migrations = [
  {
    up: migration_20260517_142800_initial.up,
    down: migration_20260517_142800_initial.down,
    name: '20260517_142800_initial'
  },
];
