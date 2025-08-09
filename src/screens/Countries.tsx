import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';
import { useTranslation } from 'react-i18next';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import Alert, { AlertTypes } from '@/src/components/Alert';
import ThemedText from '@/src/components/ThemedText';

type CountryKey = 'usa' | 'china' | 'japan' | 'india' | 'russia' | 'gb' | 'italy' | 'arabia';

const countries: CountryKey[] = [
	'usa', 'china', 'japan', 'india', 'russia', 'gb', 'italy', 'arabia'
];

const images: Record<CountryKey, ImageSourcePropType> = {
	usa: require('@/assets/images/flags/usa.png'),
	china: require('@/assets/images/flags/china.png'),
	japan: require('@/assets/images/flags/japan.png'),
	india: require('@/assets/images/flags/india.png'),
	russia: require('@/assets/images/flags/russia.png'),
	gb: require('@/assets/images/flags/gb.png'),
	italy: require('@/assets/images/flags/italy.png'),
	arabia: require('@/assets/images/flags/arabia.png'),
};

export default function Countries() {
	const { t } = useTranslation();

	return (
		<ParallaxScrollView
			headerImage={
				<Image
					source={require('@/assets/images/countries.png')}
					style={styles.logo}
				/>
			}>
			<View style={styles.titleContainer}>
				<ThemedText type="title">{t('countries.title')}</ThemedText>
			</View>

			<Alert
				title={t('countries.subtitle')}
				text={t('countries.info')}
				type={AlertTypes.info}
			/>

			{countries.map((country: CountryKey) => (
				<View style={styles.country} key={country}>
					<Image
						source={images[country]}
						style={styles.flag}
					/>
					<ThemedText type="subtitle" style={styles.title}>
						{t(`countries.${country}`)}
					</ThemedText>
				</View>
			))}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
		height: 250,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
	country: {
		flexDirection: 'row',
    alignItems: 'center',
	},
	flag: {
		width: 32,
		resizeMode: 'contain',
		marginRight: 12,
	},
	title: {
		flex: 1,
	},
});
