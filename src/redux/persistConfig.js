import { createMigrate } from 'redux-persist';
import { reduxStorage } from '../services/storage';

const migrations = {};

export default {
  key: 'addicto',
  version: 4,
  storage: reduxStorage,
  debug: false,
  migrate: createMigrate(migrations, { debug: false }),
  blacklist: [
    // 'conso',
  ],
};
