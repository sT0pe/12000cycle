import { View, TouchableOpacity, Animated, StyleSheet, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { COLORS } from '@/src/constants/colors';
import { KitInfo, Kit } from '@/src/screens';

const renderScene = SceneMap({
  info: KitInfo,
  kit: Kit,
});

export default function TabViewExample() {
	const { t } = useTranslation();

  const [index, setIndex] = useState(0);

	const routes = [
		{ key: 'kit', title: t('kit.tab-2') },
		{ key: 'info', title: t('kit.tab-1') },
	];

	const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: number) => i);

		return (
			<View style={styles.tabBar}>
				{props.navigationState.routes.map((route: any, i: number) => {
					const opacity = props.position.interpolate({
						inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5
            ),
					});

					return (
						<TouchableOpacity
							style={[
								styles.tabItem,
								index === i && styles.activeTabItem
							]}
							onPress={() => setIndex(i)}
							key={i}
						>
							<Animated.Text
								style={[
									{ opacity },
									index === i && styles.activeTabText
								]}
							>
								{route.title}
							</Animated.Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
			renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
		backgroundColor: 'white',
  },
	activeTabItem: {
		borderBottomWidth: 2,
		borderBottomColor: COLORS.blue[600],
	},
	activeTabText: {
		color: COLORS.blue[600],
		fontWeight: '500'
	},
});