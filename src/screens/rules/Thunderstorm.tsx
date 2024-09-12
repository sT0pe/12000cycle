import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';

import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';

const icons = [
	<FontAwesome6 name="building-circle-check" size={20} color={COLORS.grey[500]} />,
	<Foundation name="mountains" size={20} color={COLORS.grey[500]} />,
	<FontAwesome5 name="water" size={20} color={COLORS.grey[500]} />,
	<Entypo name="tree" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="do-not-touch" size={20} color={COLORS.grey[500]} />,
	<FontAwesome5 name="user-check" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="mobile-off" size={20} color={COLORS.grey[500]} />,
	<FontAwesome name="warning" size={20} color={COLORS.grey[500]} />,
];

export default function Thunderstorm() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/thunderstorm.jpg')}
			title="storm.title"
			info={{
				title: 'storm.subtitle',
				text: 'storm.info',
			}}
			rules={{
				namespace: 'storm',
				count: 8,
				icons,
			}}
		/>
	);
}
