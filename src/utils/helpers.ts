import { Platform } from 'react-native';

export const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getAppLink = () => Platform.select({
	ios: 'https://apps.apple.com/us/app/12000-cycle/id6677048277',
	android: 'https://play.google.com/store/apps/details?id=com.twelve_thousand.cycle',
});
