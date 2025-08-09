import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { cloneElement } from 'react';

import ThemedText from '@/src/components/ThemedText';
import { COLORS } from '@/src/constants/colors';

export enum AlertTypes {
	info = 'info',
	success = 'success',
	warning = 'warning',
	error = 'error',
};

type AlertProps = {
  icon?: React.ReactElement;
  title?: string;    
  text?: string;
	type?: AlertTypes
};

const ICON_SIZE = 24;

const icons = {
	[AlertTypes.info]: <Entypo name="info-with-circle" />,
	[AlertTypes.success]: <FontAwesome name="check-circle" />,
	[AlertTypes.warning]: <FontAwesome name="warning" />,
	[AlertTypes.error]: <FontAwesome name="exclamation-circle" />,
};

const colors = {
	[AlertTypes.info]: COLORS.blue,
	[AlertTypes.success]: COLORS.green,
	[AlertTypes.warning]: COLORS.yellow,
	[AlertTypes.error]: COLORS.red,
}

export default function Alert({ icon, title, text, type = AlertTypes.info }: AlertProps) {
	const color = colors[type];

	const iconWithStyles = cloneElement(icon || icons[type], { color: color[600], size: ICON_SIZE, marginRight: 10 });

	return (
    <View style={[styles.container, { backgroundColor: color[50], borderColor: color[400] }]}>
			{title && (
				<View style={styles.titleContainer}>
					{iconWithStyles || icons[type]}
					<ThemedText type="subtitle" style={[styles.title, { color: color[800] }]}>
						{title}
					</ThemedText>
				</View>
			)}
			
			<ThemedText style={{ color: color[700] }}>
				{text}
			</ThemedText>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		gap: 6,
		padding: 12,
		borderLeftWidth: 3,
	},
	titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
	title: {
		fontSize: 16,
		flex: 1
	},
});
