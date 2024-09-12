import { View, StyleSheet, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';

import ThemedText from '@/src/components/ThemedText';
import { ROUTES } from '@/src/constants/routes';

export default function Rules() {
	const { t } = useTranslation();

	const list = [
		{
			route: ROUTES.earthquake,
			image: require('@/assets/images/rules/earthquake.jpg'),
		},
		{
			route: ROUTES.flood,
			image: require('@/assets/images/rules/flood.jpg'),
		},
		{
			route: ROUTES.volcanic,
			image: require('@/assets/images/rules/volcanic.jpg'),
		},
		{
			route: ROUTES.tsunami,
			image: require('@/assets/images/rules/tsunami.jpg'),
		},
		{
			route: ROUTES.fires,
			image: require('@/assets/images/rules/fires.jpg'),
		},
		{
			route: ROUTES.hurricane,
			image: require('@/assets/images/rules/hurricane.jpg'),
		},
		{
			route: ROUTES.thunderstorm,
			image: require('@/assets/images/rules/thunderstorm.jpg'),
		},
		{
			route: ROUTES.drought,
			image: require('@/assets/images/rules/drought.jpg'),
		},
		{
			route: ROUTES.tornado,
			image: require('@/assets/images/rules/tornado.jpg'),
		},
		{
			route: ROUTES.solar,
			image: require('@/assets/images/rules/solar.jpg'),
		},
	];

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="auto" />

			<ScrollView contentContainerStyle={styles.content}>
				{list.map((item) => (
					 <View style={styles.section} key={item.route}>
						<Link to={{ screen: `${item.route}` }}>
							<View style={styles.card}>
								<View>
									<Image
										source={item.image}
										style={styles.image}
									/>
								</View>
								<View style={styles.caption}>
									<ThemedText type="subtitle" style={styles.text}>
										{t(`routes.${item.route}`)}
									</ThemedText>
								</View>
							</View>
						</Link>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
  content: {
    paddingHorizontal: 8,
		paddingTop: 6
  },
  section: {
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
  },
	card: {
		backgroundColor: '#eee',
		borderRadius: 10,
		overflow: 'hidden',
		borderWidth: 1,
		marginBottom: 10,
		borderColor: '#ccc',
	},
	image: {
		height: 135,
		width: Dimensions.get('window').width - 20,
	},
	caption: {
		padding: 10,
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
    fontWeight: 'bold',
	}
});
