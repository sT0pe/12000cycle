import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<Entypo name="radio" size={20} color={COLORS.grey[500]} style={{ marginBottom: 4 }} />,
	<MaterialCommunityIcons name="water-alert" size={24} color={COLORS.grey[500]} />,
	<MaterialIcons name="shelves" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="pipe-leak" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="sun-plant-wilt" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="water-sync" size={24} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="watering-can" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="water-remove" size={24} color={COLORS.grey[500]} />,
	<MaterialIcons name="recommend" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="people-group" size={20} color={COLORS.grey[500]} />,
];

export default function Drought() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/drought.jpg')}
			title="drought.title"
			info={{
				title: 'drought.subtitle',
				text: 'drought.info',
			}}
			rules={{
				namespace: 'drought',
				count: 10,
				icons,
			}}
		/>
	);
}
