import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { useCallback } from 'react';

import AppNavigation from '@/src/navigation/AppNavigation';
import '@/src/localization/i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<AppNavigation />
		</View>
	);
}
