import { View, StyleSheet } from 'react-native';

import ThemedText from '@/src/components/ThemedText';

export default function FirstAid() {
	return (
		<View style={styles.container}>
			<ThemedText style={styles.message}>
				Эта функция будет доступна в следующих версиях приложения.
			</ThemedText>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
		padding: 12
  },
	message: {
		
	},
});
