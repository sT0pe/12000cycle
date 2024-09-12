import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Foundation, MaterialCommunityIcons, Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text, Share } from 'react-native';
import { useState } from 'react';

import SettingsNavigation from '@/src/navigation/SettingsNavigation';
import { ROUTES, HIDE_HEADER_ROUTES } from '@/src/constants/routes';
import RulesNavigation from '@/src/navigation/RulesNavigation';
import { Home, Actions, Countries } from '@/src/screens';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
	const { t } = useTranslation();

	const [isProfileEnabled, setIsProfileEnabled] = useState(true);

	const onShare = async () => {
    try {
      const result = await Share.share({
        message: t('common.shareText'),
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

	return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
			<DrawerItem
        label={
					({ color }) => (
						<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ color, fontWeight: '500', }}>{t('routes.share')}</Text>
						</View>
					)
				}
				icon={({ size, color }) => <Entypo name="share" size={size} color={color} />}
        onPress={onShare}
      />
			<View style={{ height: 1, width: '100%', backgroundColor: '#e2e4e8', marginTop: 20 }} />
			<DrawerItem
        label={
					({ color }) => (
						<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ color, fontWeight: '500', }}>{t(`routes.${ROUTES.firstAid}`)}</Text>
							<View style={{ backgroundColor: '#ffd700', borderRadius: 12, paddingVertical: 4, paddingHorizontal: 8, marginLeft: 10 }}>
								<Text style={{ color: 'black', fontSize: 12 }}>{t('common.soon')}</Text>
							</View>
						</View>
					)
				}
				icon={({ size, color }) => <Foundation name="first-aid" size={size} color={color} />}
        onPress={() => !isProfileEnabled ? props.navigation.navigate(ROUTES.firstAidStack) : null}
      />
			<DrawerItem
        label={
					({ color }) => (
						<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ color, fontWeight: '500', }}>{t(`routes.${ROUTES.suitcase}`)}</Text>
							<View style={{ backgroundColor: '#ffd700', borderRadius: 12, paddingVertical: 4, paddingHorizontal: 8, marginLeft: 10 }}>
								<Text style={{ color: 'black', fontSize: 12 }}>{t('common.soon')}</Text>
							</View>
						</View>
					)
				}
				icon={({ size, color }) => <MaterialCommunityIcons name="bag-personal-outline" size={size - 5} color={color} />}
        onPress={() => !isProfileEnabled ? props.navigation.navigate(ROUTES.firstAidStack) : null}
      />
    </DrawerContentScrollView>
  );
};

type DrawerLabelProps = {
	color: string,
	label: string,
};

const DrawerLabel = ({ color, label }: DrawerLabelProps) => (
	<Text style={{ color, flexWrap: 'wrap', fontWeight: '500' }}>
		{label}
	</Text>
);

export default function AppNavigation() {
	const { t } = useTranslation();

	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={props => <CustomDrawerContent {...props} />}
				initialRouteName={ROUTES.home}
				screenOptions={
					({ route }) => {
						const routeName = getFocusedRouteNameFromRoute(route);
						return ({
							headerShown: !HIDE_HEADER_ROUTES.includes(routeName as any),
						});
					}
				}
			>
				<Drawer.Screen
					name={ROUTES.home}
					component={Home}
					options={{
						title: t(`routes.${ROUTES.home}`),
						drawerIcon: ({ color, size }) => <Ionicons name="earth" size={size} color={color} />,
						drawerLabel: ({ color }) => <DrawerLabel color={color} label={t(`routes.${ROUTES.home}`)} />,
					}}
				/>
				<Drawer.Screen
					name={ROUTES.actions}
					component={Actions}
					options={{
						title: t(`routes.${ROUTES.actions}`),
						drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="head-question-outline" size={size} color={color} />,
						drawerLabel: ({ color }) => <DrawerLabel color={color} label={t(`routes.${ROUTES.actions}`)} />,
					}}
				/>
				<Drawer.Screen
					name={ROUTES.countries}
					component={Countries}
					options={{
						headerTitle: () => (
							<Text style={{ flexWrap: 'wrap', fontSize: 18, fontWeight: 500, textAlign: 'center', lineHeight: 18 }}>
								{t(`routes.${ROUTES.countries}`)}
							</Text>
						),
						drawerIcon: ({ color }) => <FontAwesome6 name="map-location-dot" size={20} color={color} />,
						drawerLabel: ({ color }) => <DrawerLabel color={color} label={t(`routes.${ROUTES.countries}`)} />,
					}}
				/>
				<Drawer.Screen
					name={ROUTES.rulesStack}
					component={RulesNavigation}
					options={{
						title: t(`routes.${ROUTES.rules}`),
						drawerIcon: ({ color, size }) => <AntDesign name="Safety" size={size} color={color} />,
						drawerLabel: ({ color }) => <DrawerLabel color={color} label={t(`routes.${ROUTES.rules}`)} />,
					}}
				/>
				<Drawer.Screen
					name={ROUTES.settingsStack}
					component={SettingsNavigation}
					options={{
						title: t(`routes.${ROUTES.settings}`),
						drawerIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
						drawerLabel: ({ color }) => <DrawerLabel color={color} label={t(`routes.${ROUTES.settings}`)} />,
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
