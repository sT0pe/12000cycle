import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';

import ThemedText, { TextTypes } from '@/src/components/ThemedText';

export default function Privacy() {
	const { t } = useTranslation();

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="auto" />
			<ScrollView>
				<View style={styles.container}>
					<ThemedText type={TextTypes.title} style={[styles.paragraph, styles.title ]}>{t('privacy.title-1')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.updated', { date: process.env.EXPO_PUBLIC_POLICY_UPDATED_DATE })}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-2')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-1')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-3')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={[styles.paragraph, styles.subtitle]}>{t('privacy.heading-1')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-2')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={[styles.paragraph, styles.subtitle]}>{t('privacy.heading-2')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-3')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={[styles.paragraph, styles.subtitle]}>{t('privacy.heading-3')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-4')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-4')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-5')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-1')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-2')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-3')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-5')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-6')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-4')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-5')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-6')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-6')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-7')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-7')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-8')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-7')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-8')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-9')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-10')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-11')}</ThemedText>
					<ThemedText style={styles.paragraph}>{'\u2022'}&nbsp;{t('privacy.list-12')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-8')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-9')}</ThemedText>
					<ThemedText type={TextTypes.subtitle} style={styles.paragraph}>{t('privacy.title-9')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.text-10')}</ThemedText>
					<ThemedText style={styles.paragraph}>{t('privacy.email', { email: process.env.EXPO_PUBLIC_SUPPORT_EMAIL })}</ThemedText>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
  container: {
		flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
	title: {
		fontSize: 24,
	},
	paragraph: {
		marginBottom: 12,
	},
	subtitle: {
		fontSize: 16,
	},
});
