import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<MaterialCommunityIcons name="stairs-down" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="mask-face" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="arrows-down-to-line" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="door-sliding-lock" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="elderly" size={20} color={COLORS.grey[500]} />,
	<Octicons name="stop" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="fire-extinguisher" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="health-and-safety" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="people-arrows" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="live-tv" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="medkit" size={20} color={COLORS.grey[500]} />,
	<FontAwesome5 name="hand-holding-medical" size={20} color={COLORS.grey[500]} />,
	<FontAwesome5 name="business-time" size={20} color={COLORS.grey[500]} />,
	<Feather name="phone-call" size={20} color={COLORS.grey[500]} />,
];

export default function Fires() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/fires.jpg')}
			title="fires.title"
			info={{
				title: 'fires.subtitle',
				text: 'fires.info',
			}}
			rules={{
				namespace: 'fires',
				count: 14,
				icons,
			}}
		/>
	);
}
