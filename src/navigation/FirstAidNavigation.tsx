import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/src/constants/routes';
import { FirstAid } from '@/src/screens';

const Stack = createNativeStackNavigator();

export default function FirstAidNavigation() {
	const { t } = useTranslation();

	return (
		<Stack.Navigator initialRouteName={ROUTES.firstAid} screenOptions={{ headerBackTitleVisible: false }}>
			<Stack.Screen name={ROUTES.firstAid} component={FirstAid} options={{ title: t(`routes.${ROUTES.firstAid}`), headerShown: false }} />
		</Stack.Navigator>
	);
}
