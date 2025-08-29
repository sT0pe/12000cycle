import 'react-native-gesture-handler';

import { View, Alert, Linking, Platform } from 'react-native';
import { checkVersion } from 'react-native-check-version';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AppNavigation from '@/src/navigation/AppNavigation';
import { getAppLink } from '@/src/utils/helpers';
import { version } from '@/package.json';
import '@/src/localization/i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const { t } = useTranslation();

	useEffect(() => {
    async function checkAppVersion() {
      try {
        const storeVersion = await checkVersion({
					bundleId: Platform.OS === "ios"
						? "com.stopexdd.12000cycle"
						: "com.twelve_thousand.cycle"
				});

        if (storeVersion.version !== version) {
          Alert.alert(
            t('settings.updateAppTitle'), 
            t('settings.updateAppDescription'),
            [
              {
                text: t('common.update'),
                onPress: async () => {
									const appLink = getAppLink();

									if (appLink) {
										await Linking.openURL(appLink);
									}
                },
              },
              { text: t('common.later'), style: "cancel" },
            ]
          );
        }
      } catch (err) {}
    }

    checkAppVersion();
  }, []);

	const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<AppNavigation />
		</View>
	);
}
