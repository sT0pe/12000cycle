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
	<AntDesign name="totop" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="flood" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="shore" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="person-arrow-up-from-line" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="waves-arrow-up" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="waveform" size={20} color={COLORS.grey[500]} />,
];

export default function Tsunami() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/tsunami.jpg')}
			title="tsunami.title"
			info={{
				title: 'tsunami.subtitle',
				text: 'tsunami.info',
			}}
			rules={{
				namespace: 'tsunami',
				count: 9,
				icons,
			}}
		/>
	);
}
