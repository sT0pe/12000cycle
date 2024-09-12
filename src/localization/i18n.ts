import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import * as langs from './translations';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin: any = {
	type: 'languageDetector', 
	async: true,
	init: () => {},
	detect: async function (callback: (lang: string) => void) {
		try {
			const deviceLanguage =
				Platform.OS === 'ios'
					? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
						NativeModules.SettingsManager.settings.AppleLocale
					: NativeModules.I18nManager.localeIdentifier;

			const defaultLanguage = deviceLanguage.split('-')?.[0];

			const storedLanguage = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);

      return callback(storedLanguage || defaultLanguage || 'en');
		} catch (error) {}
	},
	cacheUserLanguage: async function (language: string) {
		try {
			await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
		} catch (error) {}
	},
};

export const supportedLngs = ['en', 'ru'];

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
	resources: {
		en: {
			translation: langs.en,
		},
		// uk: {
		// 	translation: langs.uk,
		// },
		ru: {
			translation: langs.ru,
		},
	},
	compatibilityJSON: 'v3',
	fallbackLng: 'en',
	supportedLngs,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
