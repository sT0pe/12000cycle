import { FontAwesome, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { JSX } from 'react';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import Alert, { AlertTypes } from '@/src/components/Alert';
import ThemedText from '@/src/components/ThemedText';
import SimpleCard from '@/src/components/SimpleCard';
import Paragraph from '@/src/components/Paragraph';
import { COLORS } from '@/src/constants/colors';

const icons: Record<string, JSX.Element> = {
	location1: <AntDesign name="home" size={24} color={COLORS.grey[500]} />,
	location2: <MaterialIcons name="work-outline" size={24} color={COLORS.grey[500]} />,
	location3: <Ionicons name="car-sport-outline" size={24} color={COLORS.grey[500]} />,
};

export default function KitInfo() {
	const { t } = useTranslation();

	return (
		<ParallaxScrollView
			headerImage={
				<Image
					source={require('@/assets/images/kit.jpg')}
					style={styles.logo}
				/>
			}>
			<ThemedText type="title">{t('kit.title')}</ThemedText>

			<Alert text={t('kit.info')} />

			<ThemedText type="subtitle">
				{t('kit.heading-1')}
			</ThemedText>
			<Paragraph>
				{t('kit.text-1')}
			</Paragraph>
			<Paragraph>
				{t('kit.text-2')}
			</Paragraph>

			<View style={[styles.container, { backgroundColor: COLORS.green[50] }]}>
				{[...Array(14).keys()].map(i => (
					<View style={styles.recommendedItem} key={i}>
						<FontAwesome name="check-circle" size={20} color={COLORS.green[600]} style={styles.recommendedIcon} />
						<ThemedText>
							{t(`kit.recommendedItem-${i+1}`)}
						</ThemedText>
					</View>
				))}
			</View>

			<ThemedText type="subtitle">
				{t('kit.heading-2')}
			</ThemedText>
			<Paragraph>
				{t('kit.text-3')}
			</Paragraph>

			<View style={[styles.container, { backgroundColor: COLORS.yellow[50] }]}>
				{[...Array(16).keys()].map(i => (
					<View style={styles.recommendedItem} key={i}>
						<FontAwesome name="check-circle" size={20} color={COLORS.yellow[400]} style={styles.recommendedIcon} />
						<ThemedText>
							{t(`kit.additionalItem-${i+1}`)}
						</ThemedText>
					</View>
				))}
			</View>

			<Alert
				title={t('kit.maintaining-title')}
				text={t('kit.maintaining-text')}
				type={AlertTypes.warning}
				icon={<FontAwesome name="hand-o-right" size={24} color="black" />}
			/>

			<Alert
				title={t('kit.storage-title')}
				text={t('kit.storage-text')}
				type={AlertTypes.success}
				icon={<FontAwesome name="hand-o-right" size={24} color="black" />}
			/>
			
			{[1,2,3].map(i => (
				<SimpleCard
					title={t(`kit.locations-${i}-title`)}
					icon={icons[`location${i}`]}
					key={i}
				>
					<Paragraph>
						{t(`kit.locations-${i}-text`)}
					</Paragraph>
				</SimpleCard>
			))}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
  logo: {
		height: 250,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
	container: {
		padding: 16,
	},
	recommendedItem: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 8,
		marginBottom: 8,
	},
	recommendedIcon: {
		marginTop: 2,
	},
});
