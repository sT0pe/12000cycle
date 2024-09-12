import { StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import ThemedText from '@/src/components/ThemedText';
import Paragraph from '@/src/components/Paragraph';

export default function Home() {
	const { t } = useTranslation();

	return (
		<ParallaxScrollView
			headerImage={
				<Image
					source={require('@/assets/images/12000.png')}
					style={styles.reactLogo}
				/>
			}>
			<View style={styles.titleContainer}>
				<ThemedText type="title">{t('home.title')}</ThemedText>
			</View>

			{[...Array(7).keys()].map(index => (
				<Paragraph key={index}>
				{t(`home.text-${index + 1}`)}
				</Paragraph>
			))}

			<Paragraph>
				{t('home.text-8')}&nbsp;
				<TouchableOpacity onPress={() => Linking.openURL(t('home.link'))}>
					<ThemedText type="link">{t('home.forum')}</ThemedText>
				</TouchableOpacity>.
			</Paragraph>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
		height: 250,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
