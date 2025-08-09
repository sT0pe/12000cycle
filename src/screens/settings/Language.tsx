import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import { supportedLngs } from '@/src/localization/i18n';
import { Languages } from '@/src/constants/languages';

export default function Language() {
	const { i18n } = useTranslation();

	const handleLanguageChange = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const renderItem = ({ item }: any) => (
		<TouchableOpacity style={styles.item} onPress={() => handleLanguageChange(item.code)}>
			<Text style={styles.title}>{item.name}</Text>
			<View style={styles.rowSpacer} />
			{i18n.language === item.code && (
				<Entypo name="check" size={22} color="green" />
			)}
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="auto" />
			<View style={styles.container}>
				<FlatList
					data={supportedLngs.map((code, index) => ({ key: index + 1, name: Languages[code as keyof typeof Languages], code }))}
					renderItem={renderItem}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  item: {
		width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginVertical: 2,
  },
  title: {
    fontSize: 18,
  },
	rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
