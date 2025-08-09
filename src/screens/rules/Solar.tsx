import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<FontAwesome6 name="tower-broadcast" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="health-and-safety" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="timer" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="medkit" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="warning" size={20} color={COLORS.grey[500]} />,
	<Ionicons name="document-lock-outline" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="security-network" size={24} color={COLORS.grey[500]} />,
];

export default function Solar() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/solar.jpg')}
			title="solar.title"
			info={{
				title: 'solar.subtitle',
				text: 'solar.info',
			}}
			rules={{
				namespace: 'solar',
				count: 7,
				icons,
			}}
		/>
	);
}
