import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
	View,
	StyleSheet,
	TextInput,
	FlatList,
	Text,
	TouchableOpacity,
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from 'react-native';

import ThemedText from '@/src/components/ThemedText';

const STORAGE_KEY = '@custom_kit_items';

type KitItem = {
	name: string;
	purchased: boolean;
};

export default function Kit() {
	const { t } = useTranslation();

	const [item, setItem] = useState('');
	const [items, setItems] = useState<KitItem[]>([]);

	const recommendedItems = [...Array(23).keys()].map(key => t(`kit.recomended-${key + 1}`));

	useEffect(() => {
		loadItems();
	}, []);

	const loadItems = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
			if (jsonValue != null) {
				setItems(JSON.parse(jsonValue));
			}
		} catch (e) {}
	};

	const saveItems = async (newItems: KitItem[]) => {
		try {
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
		} catch (e) {}
	};

	const addItem = (value: string) => {
		if (!value.trim()) return;

		if (items.find(i => i.name.toLowerCase() === value.trim().toLowerCase())) return;

		const newItem: KitItem = { name: value.trim(), purchased: false };
		const newItems = [...items, newItem];
		setItems(newItems);
		saveItems(newItems);
		setItem('');
	};

	const removeItem = (index: number) => {
		Alert.alert(`${t('common.delete')}?`, t('kit.deleteItem'), [
			{ text: t('common.cancel'), style: 'cancel' },
			{
				text: t('common.delete'),
				style: 'destructive',
				onPress: () => {
					const newItems = [...items];
					newItems.splice(index, 1);
					setItems(newItems);
					saveItems(newItems);
				},
			},
		]);
	};

	const togglePurchased = (index: number) => {
		const newItems = [...items];
		newItems[index].purchased = !newItems[index].purchased;
		setItems(newItems);
		saveItems(newItems);
	};

	const addRecommendedItem = (value: string) => {
		addItem(value);
	};

	const isAlreadyAdded = (rec: string) =>
		items.some(i => i.name.toLowerCase() === rec.toLowerCase());

	const notPurchasedItems = items.filter(item => !item.purchased);
	const purchasedItems = items.filter(item => item.purchased);

	return (
		<KeyboardAvoidingView
			style={styles.wrapper}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<View style={styles.container}>
				<ThemedText type="title">{t('kit.myKit')}</ThemedText>

				<View style={styles.inputRow}>
					<TextInput
						style={styles.input}
						value={item}
						placeholder={t('kit.addItem')}
						onChangeText={setItem}
					/>
					<TouchableOpacity onPress={() => addItem(item)}>
						<View style={styles.btn}>
							<Text style={styles.btnText}>
								+
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
					<ThemedText type="subtitle" style={styles.subtitle}>
						❗ {t('kit.notBought')}
					</ThemedText>
					{notPurchasedItems.length === 0 && <Text style={styles.emptyText}>{t('kit.empty')}</Text>}
					{notPurchasedItems.map((item, index) => (
						<View style={styles.listItem} key={index}>
							<TouchableOpacity
								onPress={() => togglePurchased(items.indexOf(item))}
								style={styles.itemTextWrapper}
							>
								<Text style={styles.needText} numberOfLines={2} ellipsizeMode="tail">
									❗ {item.name}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => removeItem(items.indexOf(item))}>
								<Text style={styles.removeText}>{t('common.delete')}</Text>
							</TouchableOpacity>
						</View>
					))}
 
					<ThemedText type="subtitle" style={styles.subtitle}>
						✅ {t('kit.bought')}
					</ThemedText>
					{purchasedItems.length === 0 && <Text style={styles.emptyText}>{t('kit.empty')}</Text>}
					{purchasedItems.map((item, index) => (
						<View style={styles.listItem} key={index}>
							<TouchableOpacity
								onPress={() => togglePurchased(items.indexOf(item))}
								style={styles.itemTextWrapper}
							>
								<Text style={styles.purchasedText}>
									✅ {item.name}
								</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>
			</View>

			{recommendedItems.filter(rec => !isAlreadyAdded(rec)).length > 0 && (
				<View style={styles.recommendationsFooter}>
					<ThemedText type="subtitle" style={styles.footerTitle}>
						{t('kit.recommended-list')}
					</ThemedText>

					<FlatList
						data={recommendedItems.filter(rec => !isAlreadyAdded(rec))}
						keyExtractor={(item, index) => item + index}
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.recommendedList}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.recommendedItem}
								onPress={() => addRecommendedItem(item)}
							>
								<Text style={styles.recommendedText}>+ {item}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			)}
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		padding: 16,
		flex: 1,
		backgroundColor: '#fff',
	},
	scrollContent: {
		padding: 16,
		paddingBottom: 80,
	},
	inputRow: {
		flexDirection: 'row',
		marginTop: 10,
	},
	subtitle: {
		marginTop: 24,
		marginBottom: 12,
		paddingBottom: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
	btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
	btnText: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
	input: {
		flex: 1,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginRight: 10,
	},
	listItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	itemTextWrapper: {
		marginRight: 8,
		flexShrink: 1,
	},
	purchasedText: {
		color: 'green',
		fontWeight: 'bold',
	},
	needText: {
		flexShrink: 1,
		color: 'black',
	},
	removeText: {
		color: 'red',
	},
	emptyText: {
		fontStyle: 'italic',
		color: '#888',
		marginVertical: 8,
	},
	recommendationsFooter: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderTopWidth: 1,
		borderTopColor: '#ddd',
		backgroundColor: '#fff',
	},
	footerTitle: {
		marginBottom: 8,
	},
	recommendedList: {
		paddingBottom: 16,
	},
	recommendedItem: {
		backgroundColor: '#e6e6e6',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 12,
		marginRight: 10,
	},
	recommendedText: {
		fontSize: 14,
		fontWeight: '500',
	},
});
