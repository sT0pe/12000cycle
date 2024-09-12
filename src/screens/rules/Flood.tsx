import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<FontAwesome6 name="radio" size={20} color={COLORS.grey[500]} style={{ marginBottom: 2 }} />,
	<FontAwesome5 name="running" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="bag-personal-outline" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="fire-alert" size={24} color={COLORS.grey[500]} />,
	<AntDesign name="totop" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="flood" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="water-drop" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="human-male-child" size={20} color={COLORS.grey[500]} />,
];

export default function Flood() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/flood.jpg')}
			title="flood.title"
			info={{
				title: 'flood.subtitle',
				text: 'flood.info',
			}}
			rules={{
				namespace: 'flood',
				count: 8,
				icons,
			}}
		/>
	);
}
