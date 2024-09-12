import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<FontAwesome6 name="radio" size={20} color={COLORS.grey[500]} style={{ marginBottom: 2 }} />,
	<FontAwesome5 name="running" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="bag-personal-outline" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="home-account" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="mask-face" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="safety-goggles" size={24} color={COLORS.grey[500]} />,
	<FontAwesome6 name="person-arrow-up-from-line" size={20} color={COLORS.grey[500]} />,
	<FontAwesome5 name="car-crash" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="air-conditioner" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="live-tv" size={20} color={COLORS.grey[500]} />,
];

export default function Volcanic() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/volcanic.jpg')}
			title="volcanic.title"
			rules={{
				namespace: 'volcanic',
				count: 10,
				icons,
			}}
		/>
	);
}
