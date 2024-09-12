import React, { ReactNode, ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import ThemedText, { TextTypes } from '@/src/components/ThemedText';
import { COLORS } from '@/src/constants/colors';

type SimpleCardProps = {
	title: string;
	children: ReactNode;
	icon?: ReactElement;
};

export default function SimpleCard({ title, icon, children }: SimpleCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
				<View style={styles.titleWrapper}>
					{icon && <View style={styles.icon}>{icon}</View>}
					<ThemedText type={TextTypes.subtitle} style={styles.title}>
						{title}
					</ThemedText>
				</View>
      </View>

			<View style={styles.contentWrapper}>
				{children}
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.grey[400],
  },
  titleContainer: {
    padding: 16,
		borderRadius: 8,
    backgroundColor: COLORS.grey[100],
  },
	titleWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		marginRight: 10,
	},
  title: {
		flex: 1,
		color: COLORS.grey[700],
		fontSize: 16,
  },
  contentWrapper: {
		width: '100%',
		paddingHorizontal: 12,
		paddingVertical: 6,
  },
});
