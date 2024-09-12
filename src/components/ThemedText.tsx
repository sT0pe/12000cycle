import { Text, type TextProps, StyleSheet } from 'react-native';

export enum TextTypes {
	default = 'default',
	title = 'title',
	subtitle = 'subtitle',
	link = 'link',
};

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'link';
};

export default function ThemedText({
  type = TextTypes.default,
  style,
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
		fontFamily: 'Raleway-Regular',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
		fontFamily: 'Raleway-Black',
  },
  subtitle: {
    fontSize: 20,
		fontFamily: 'Raleway-Bold',
  },
  link: {
    color: '#0a7ea4',
		fontFamily: 'Raleway-Regular',
  },
});
