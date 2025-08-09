import { StyleSheet, View } from 'react-native';

import ThemedText from './ThemedText';

export default function Paragraph({ children, style }: any) {
  return (
    <View style={styles.stepContainer}>
			<ThemedText style={style}>
				{children}
			</ThemedText>
		</View>
  );
}

const styles = StyleSheet.create({
	stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
