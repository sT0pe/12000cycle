import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { Settings, Language, ContactUs, ReportBug, Privacy } from '@/src/screens';
import { ROUTES } from '@/src/constants/routes';

const Stack = createNativeStackNavigator();

export default function SettingsNavigation() {
	const { t } = useTranslation();

	return (
		<Stack.Navigator initialRouteName={ROUTES.settings}>
			<Stack.Screen name={ROUTES.settings} component={Settings} options={{ title: t(`routes.${ROUTES.settings}`), headerShown: false }} />
			<Stack.Screen name={ROUTES.settingsLanguage} component={Language} options={{ title: t(`routes.${ROUTES.settingsLanguage}`) }} />
			<Stack.Screen name={ROUTES.settingsContact} component={ContactUs} options={{ title: '' }} />
			<Stack.Screen name={ROUTES.settingsReport} component={ReportBug} options={{ title: t(`routes.${ROUTES.settingsReport}`) }} />
			<Stack.Screen name={ROUTES.settingsPrivacy} component={Privacy} options={{ title: t(`routes.${ROUTES.settingsPrivacy}`) }} />
		</Stack.Navigator>
	);
}
