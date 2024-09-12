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
	<FontAwesome6 name="radio" size={20} color={COLORS.grey[500]} style={{ marginBottom: 4 }} />,
	<FontAwesome name="medkit" size={20} color={COLORS.grey[500]} />,
	<Feather name="wind" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="door-closed-lock" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="electric-bolt" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="route" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="home-account" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="phone-volume" size={20} color={COLORS.grey[500]} />,
	<FontAwesome6 name="house-flood-water" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="live-tv" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="weather-hurricane" size={20} color={COLORS.grey[500]} />,
];

export default function Hurricane() {
	return (
		<RulesLayout
			image={require('@/assets/images/rules/hurricane.jpg')}
			title="hurricane.title"
			info={{
				title: 'hurricane.subtitle',
				text: 'hurricane.info',
			}}
			rules={{
				namespace: 'hurricane',
				count: 11,
				icons,
			}}
		/>
	);
}
