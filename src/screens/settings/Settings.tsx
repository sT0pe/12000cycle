import { Text, View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

import { Languages } from '@/src/constants/languages';
import { ROUTES } from '@/src/constants/routes';
import { version } from '@/package.json';

export default function Settings({ navigation }: any) {
	const { t, i18n } = useTranslation();

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="auto" />

			<ScrollView contentContainerStyle={styles.content}>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{t('settings.preferences')}</Text>
					<View style={styles.sectionBody}>
						<View style={[styles.rowWrapper, styles.rowFirst, styles.rowLast]}>
							<TouchableOpacity
								onPress={() => navigation.navigate(ROUTES.settingsLanguage)}
								style={styles.row}
							>
								<Text style={styles.rowLabel}>{t('settings.language')}</Text>
								<View style={styles.rowSpacer} />
								<Text style={styles.rowValue}>{Languages[i18n.language as keyof typeof Languages]}</Text>
								<Entypo name="chevron-right" size={19} color="#bcbcbc" />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={[styles.section, styles.sectionLast]}>
					<Text style={styles.sectionTitle}>{t('settings.resources')}</Text>
					<View style={styles.sectionBody}>
						<View style={[styles.rowWrapper, styles.rowFirst]}>
							<TouchableOpacity
								onPress={() => navigation.navigate(ROUTES.settingsContact)}
								style={styles.row}
							>
								<Text style={styles.rowLabel}>{t('settings.contactUs')}</Text>
								<View style={styles.rowSpacer} />
								<Entypo name="chevron-right" size={19} color="#bcbcbc" />
							</TouchableOpacity>
						</View>
						<View style={styles.rowWrapper}>
							<TouchableOpacity
								onPress={() => navigation.navigate(ROUTES.settingsReport)}
								style={styles.row}
							>
								<Text style={styles.rowLabel}>{t('settings.reportBug')}</Text>
								<View style={styles.rowSpacer} />
								<Entypo name="chevron-right" size={19} color="#bcbcbc" />
							</TouchableOpacity>
						</View>
						<View style={[styles.rowWrapper, styles.rowLast]}>
							<TouchableOpacity
								onPress={() => navigation.navigate(ROUTES.settingsPrivacy)}
								style={styles.row}
							>
								<Text style={styles.rowLabel}>{t('settings.privacy')}</Text>
								<View style={styles.rowSpacer} />
								<Entypo name="chevron-right" size={19} color="#bcbcbc" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
	
				<Text style={styles.contentFooter}>{t('settings.version')} {version}</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#eee'
	},
  content: {
		flex: 1,
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  section: {
    paddingVertical: 12,
		width: '100%',
  },
	sectionLast: {
		flexGrow: 1,
	},
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
