import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/src/constants/routes';
import {
	Rules,
	Thunderstorm,
	Earthquake,
	Flood,
	Volcanic,
	Tsunami,
	Fires,
	Hurricane,
	Drought,
	Tornado,
	Solar,
} from '@/src/screens';

const Stack = createNativeStackNavigator();

export default function RulesNavigation() {
	const { t } = useTranslation();

	return (
		<Stack.Navigator initialRouteName={ROUTES.rules} screenOptions={{ headerBackTitleVisible: false }}>
			<Stack.Screen name={ROUTES.rules} component={Rules} options={{ title: t(`routes.${ROUTES.rules}`), headerShown: false }} />
			<Stack.Screen name={ROUTES.earthquake} component={Earthquake} options={{ title: t(`routes.${ROUTES.earthquake}`) }} />
			<Stack.Screen name={ROUTES.flood} component={Flood} options={{ title: t(`routes.${ROUTES.flood}`) }} />
			<Stack.Screen name={ROUTES.volcanic} component={Volcanic} options={{ title: t(`routes.${ROUTES.volcanic}`) }} />
			<Stack.Screen name={ROUTES.tsunami} component={Tsunami} options={{ title: t(`routes.${ROUTES.tsunami}`) }} />
			<Stack.Screen name={ROUTES.fires} component={Fires} options={{ title: t(`routes.${ROUTES.fires}`) }} />
			<Stack.Screen name={ROUTES.hurricane} component={Hurricane} options={{ title: t(`routes.${ROUTES.hurricane}`) }} />
			<Stack.Screen name={ROUTES.thunderstorm} component={Thunderstorm} options={{ title: t(`routes.${ROUTES.thunderstorm}`) }} />
			<Stack.Screen name={ROUTES.drought} component={Drought} options={{ title: t(`routes.${ROUTES.drought}`) }} />
			<Stack.Screen name={ROUTES.tornado} component={Tornado} options={{ title: t(`routes.${ROUTES.tornado}`) }} />
			<Stack.Screen name={ROUTES.solar} component={Solar} options={{ title: t(`routes.${ROUTES.solar}`) }} />
		</Stack.Navigator>
	);
}
