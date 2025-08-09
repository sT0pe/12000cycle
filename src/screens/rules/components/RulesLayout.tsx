import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import Alert, { AlertTypes } from '@/src/components/Alert';
import ThemedText from '@/src/components/ThemedText';
import SimpleCard from '@/src/components/SimpleCard';
import Paragraph from '@/src/components/Paragraph';

type InfoType = {
	title: string;
	text: string;
};

type RulesType = {
	namespace: string;
	count: number;
	icons: ReactElement[];
};

type RulesLayoutProps = {
	image: ImageSourcePropType;
	title: string;
	info?: InfoType;
	rules?: RulesType;
	content?: ReactElement;
};

export default function RulesLayout({ image, title, info, rules, content }: RulesLayoutProps) {
	const { t } = useTranslation();

	return (
		<ParallaxScrollView
			headerImage={
				<Image
					source={image}
					style={styles.logo}
				/>
			}>
			<View style={styles.titleContainer}>
				<ThemedText type="title">{t(title)}</ThemedText>
			</View>

			{info && (
				<Alert
					title={t(info.title)}
					text={t(info.text)}
					type={AlertTypes.info}
				/>
			)}

			{rules && [...Array(rules.count).keys()].map(index => (
				<SimpleCard
					title={t(`${rules.namespace}.heading-${index + 1}`)}
					icon={rules.icons[index]}
					key={index}
				>
					<Paragraph>
						{t(`${rules.namespace}.text-${index + 1}`)}
					</Paragraph>
				</SimpleCard>
			))}

			{content || null}

			<Alert
				title={t('common.rulesHelpTitle')}
				text={t('common.rulesHelpText')}
				icon={<FontAwesome6 name="handshake" />}
				type={AlertTypes.success}
			/>

			<Alert
				title={t('common.rulesWarningTitle')}
				text={t('common.rulesWarningText')}
				icon={<FontAwesome name="exclamation" />}
				type={AlertTypes.error}
			/>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
