import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import AppNavigation from '@/src/navigation/AppNavigation';
import '@/src/localization/i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded, error] = useFonts({
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
  });

	useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

	if (!loaded && !error) {
    return null;
  }

  return <AppNavigation />;
}
