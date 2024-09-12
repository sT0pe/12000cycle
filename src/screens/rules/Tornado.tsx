import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { View, StyleSheet } from 'react-native';

import SimpleCard from '@/src/components/SimpleCard';
import Paragraph from '@/src/components/Paragraph';
import { COLORS } from '@/src/constants/colors';

import RulesLayout from './components/RulesLayout';
import { useTranslation } from 'react-i18next';
import ThemedText from '@/src/components/ThemedText';

const icons = [
	<FontAwesome name="home" size={24} color={COLORS.grey[500]} />,
	<FontAwesome6 name="person-shelter" size={24} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="window-closed-variant" size={24} color={COLORS.grey[500]} />,
	<FontAwesome name="home" size={24} color={COLORS.grey[500]} />,
	<FontAwesome5 name="car-crash" size={24} color={COLORS.grey[500]} />,
	<FontAwesome6 name="bridge-circle-exclamation" size={24} color={COLORS.grey[500]} />,
	<AntDesign name="download" size={24} color={COLORS.grey[500]} />,
	<Entypo name="tree" size={24} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="racing-helmet" size={24} color={COLORS.grey[500]} />,

	<MaterialIcons name="flood" size={20} color={COLORS.grey[500]} />,
	<MaterialIcons name="water-drop" size={20} color={COLORS.grey[500]} />,
	<MaterialCommunityIcons name="human-male-child" size={20} color={COLORS.grey[500]} />,
];

export default function Tornado() {
	const { t } = useTranslation();

	return (
		<RulesLayout
			image={require('@/assets/images/rules/tornado.jpg')}
			title="tornado.title"
			info={{
				title: 'tornado.subtitle',
				text: 'tornado.info',
			}}
			content={
				<View>
					{[...Array(3).keys()].map(index => (
						<View key={index}>
							<ThemedText type="subtitle" style={styles.title}>
								{t(`tornado.title-${index + 1}`)}
							</ThemedText>
							{[...Array(3).keys()].map(key => (
								<View style={styles.card}>
									<SimpleCard
										title={t(`tornado.heading-${key + 1 + 3*index}`)}
										icon={icons[key + 3*index]}
										key={key}
									>
										<Paragraph>
											{t(`tornado.text-${key + 1 + 3*index}`)}
										</Paragraph>
									</SimpleCard>
								</View>
							))}
						</View>
					))}
					<ThemedText type="subtitle" style={styles.title}>
						{t('tornado.title-4')}
					</ThemedText>
					{[10,11,12].map(key => (
						<Paragraph key={key}>
							{t(`tornado.text-${key}`)}
						</Paragraph>
					))}
				</View>
			}
		/>
	);
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
  card: {
		marginBottom: 12,
  },
});
