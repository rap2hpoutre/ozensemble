import React, { useEffect, useState } from 'react';
import * as Sentry from '@sentry/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import weekday from 'dayjs/plugin/weekday';
import Router from './src/Router';
import './src/services/polyfills';

import { SENTRY_XXX } from './src/config';
import ToastProvider from './src/services/toast';
import './src/styles/theme';
import {
  hasMigrateOwnDrinksCatalog,
  migrateOwnDrinksCatalog,
  hasSentPreviousDrinksToDB,
  sendPreviousDrinksToDB,
} from './src/services/storage';

dayjs.locale('fr');
dayjs.extend(isSameOrAfter);
dayjs.extend(weekday);

if (!__DEV__) {
  Sentry.init({
    dsn: SENTRY_XXX,
    beforeSend(event) {
      if (event.contexts?.device?.name) {
        // Don't send user's device name
        delete event.contexts.device.name;
      }
      return event;
    },
  });
}

const sendDrinksToBd = async () => {
  await sendPreviousDrinksToDB();
};

const App = () => {
  const [_hasSentPreviousDrinksToDB, setHasSentPreviousDrinksToDB] = useState(hasSentPreviousDrinksToDB);
  const [_hasMigratedOwnDrinksCatalog, setHasMigratedOwnDrinksCatalog] = useState(hasMigrateOwnDrinksCatalog);

  useEffect(() => {
    if (!hasMigrateOwnDrinksCatalog) {
      migrateOwnDrinksCatalog();
      setHasMigratedOwnDrinksCatalog(true);
    }
    if (!_hasSentPreviousDrinksToDB) {
      sendDrinksToBd();
      setHasSentPreviousDrinksToDB(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!_hasSentPreviousDrinksToDB || !_hasMigratedOwnDrinksCatalog) {
    return null;
  }

  return (
    <RecoilRoot>
      <ToastProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </ToastProvider>
    </RecoilRoot>
  );
};

export default Sentry.wrap(App);
