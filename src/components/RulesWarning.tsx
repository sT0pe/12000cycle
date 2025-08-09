import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import ThemedText from '@/src/components/ThemedText';
import { COLORS } from '@/src/constants/colors';

export default function RulesWarning() {
	const { t } = useTranslation();

  return (
    <View style={styles.stepContainer}>
			<View style={styles.titleContainer}>
				<FontAwesome name="exclamation" size={24} color={COLORS.red[600]} />
				<ThemedText type="subtitle" style={styles.title}>{t('common.rulesWarningTitle')}</ThemedText>
			</View>
			<ThemedText style={styles.text}>
				{t('common.rulesWarningText')}
			</ThemedText>
		</View>
  );
}

const styles = StyleSheet.create({
	stepContainer: {
    gap: 8,
		padding: 12,
		backgroundColor: COLORS.red[50],
		borderLeftWidth: 3,
		borderColor: COLORS.red[400],
  },
	titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
	title: {
		color: COLORS.red[800],
		marginLeft: 8,
	},
	text: {
    color: COLORS.red[700],
  },
});
