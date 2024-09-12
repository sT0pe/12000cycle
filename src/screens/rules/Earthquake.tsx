import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<MaterialCommunityIcons name="exit-run" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="home-floor-2" size={24} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="window-closed-variant" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="tree-city" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="automobile" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="repeat" size={20} color={COLORS.grey[500]} />,
	<Fontisto name="first-aid-alt" size={20} color={COLORS.grey[500]} style={{ marginBottom: 2 }} />,
	<MaterialCommunityIcons name="fire-alert" size={24} color={COLORS.grey[500]} />,
	<FontAwesome6 name="radio" size={20} color={COLORS.grey[500]} style={{ marginBottom: 2 }} />,
	<AntDesign name="sound" size={20} color={COLORS.grey[500]} />,
];

export default function Earthquake() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/earthquake.jpg')}
			title="earthquake.title"
			info={{
				title: 'earthquake.subtitle',
				text: 'earthquake.info',
			}}
			rules={{
				namespace: 'earthquake',
				count: 10,
				icons,
			}}
		/>
	);
}
