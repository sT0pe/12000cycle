import { FontAwesome, Entypo, FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import Alert, { AlertTypes } from '@/src/components/Alert';
import ThemedText from '@/src/components/ThemedText';
import SimpleCard from '@/src/components/SimpleCard';
import Paragraph from '@/src/components/Paragraph';
import { COLORS } from '@/src/constants/colors';

export default function Countries() {
	const { t } = useTranslation();

	return (
		<ParallaxScrollView
			headerImage={
				<Image
					source={require('@/assets/images/actions.jpg')}
					style={styles.logo}
				/>
			}>
			<ThemedText type="title">{t('actions.title')}</ThemedText>

			<Alert text={t('actions.info')} />

			<ThemedText type="subtitle">
				{t('actions.heading-1')}
			</ThemedText>
			<Paragraph>
				{t('actions.text-1')}
			</Paragraph>
			<Paragraph>
				{t('actions.text-2')}
			</Paragraph>

			<ThemedText type="subtitle">
				{t('actions.heading-2')}
			</ThemedText>
			<SimpleCard
				title={t('actions.title-1')}
				icon={<Entypo name="water" size={24} color={COLORS.blue[500]} />}
			>
				<Paragraph>
					{t('actions.text-3')}
				</Paragraph>
			</SimpleCard>
			<SimpleCard
				title={t('actions.title-2')}
				icon={<FontAwesome name="share" size={24} color={COLORS.blue[500]} />}
			>
				<Paragraph>
					{t('actions.text-4')}
				</Paragraph>
			</SimpleCard>

			<ThemedText type="subtitle">
				{t('actions.heading-3')}
			</ThemedText>
			<Paragraph>
				{t('actions.text-5')}
			</Paragraph>
			<Paragraph>
				{t('actions.text-6')}
			</Paragraph>

			<ThemedText type="subtitle">
				{t('actions.heading-2')}
			</ThemedText>
			<SimpleCard
				title={t('actions.title-3')}
				icon={<FontAwesome6 name="people-group" size={24} color={COLORS.green[500]} />}
			>
				<Paragraph>
					{t('actions.text-7')}
				</Paragraph>
			</SimpleCard>
			<SimpleCard
				title={t('actions.title-4')}
				icon={<Entypo name="open-book" size={24} color={COLORS.green[500]} />}
			>
				<Paragraph>
					{t('actions.text-8')}
				</Paragraph>
			</SimpleCard>

			<Alert
				title={t('actions.heading-4')}
				text={t('actions.text-9')}
				type={AlertTypes.success}
				icon={<FontAwesome name="hand-o-right" size={24} color="black" />}
			/>	

			<Alert
				title={t('actions.heading-5')}
				text={t('actions.text-10')}
				type={AlertTypes.warning}
				icon={<FontAwesome name="hand-o-right" size={24} color="black" />}
			/>			
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
});
