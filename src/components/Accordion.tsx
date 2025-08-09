import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { LayoutChangeEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef, ReactNode, ReactElement } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import ThemedText, { TextTypes } from '@/src/components/ThemedText';
import { COLORS } from '@/src/constants/colors';

type AccordionProps = {
	title: string;
	children: ReactNode;
	icon?: ReactElement;
};

export default function Accordion({ title, icon, children }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const contentHeight = useSharedValue(0);
	const measuredHeight = useRef(0);

	const handleContentHeight = (event: LayoutChangeEvent) => {
		measuredHeight.current = event.nativeEvent.layout.height;
	};

  const handlePress = () => {
    setExpanded(!expanded);
    contentHeight.value = expanded ? withTiming(0) : withTiming(measuredHeight.current, { duration: 300 });
  };

  const animatedStyle = useAnimatedStyle(() => ({ height: contentHeight.value }));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.titleContainer}>
				<View style={styles.titleWrapper}>
					{icon && <View style={styles.icon}>{icon}</View>}
					<ThemedText type={TextTypes.subtitle} style={styles.title}>
						{title}
					</ThemedText>
					<Entypo name="chevron-down" size={24} color={COLORS.grey[500]} style={[styles.chevron, expanded && styles.chevronExpanded]} />
				</View>
      </TouchableOpacity>
      <Animated.View style={[styles.contentContainer, animatedStyle]}>
				<View
					style={styles.contentWrapper}
					onLayout={handleContentHeight}
				>
					{children}
				</View>
				</Animated.View>
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
	chevron: {
		marginLeft: 10,
	},
	chevronExpanded: {
		transform: [{ rotate: '180deg' }],
	},
  title: {
		flex: 1,
		color: COLORS.grey[700],
		fontSize: 16,
  },
  contentContainer: {
		width: '100%',
    overflow: 'hidden',
  },
  contentWrapper: {
		width: '100%',
    position: 'absolute',
    display: 'flex',
		paddingHorizontal: 12,
		paddingVertical: 6,
  },
});
