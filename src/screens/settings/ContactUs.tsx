import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { send } from '@emailjs/react-native';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { isValidEmail } from '@/src/utils/helpers';

enum FormFields {
	name = 'name',
	email = 'email',
	message = 'message',
}

type InputStateType = {
	value: string;
	error: boolean;
	dirty: boolean;
	validation: (value: string) => boolean;
};

type FormType = {
	[FormFields.name]: InputStateType;
	[FormFields.email]: InputStateType;
	[FormFields.message]: InputStateType;
};

export default function ContactUs() {
	const { t } = useTranslation();

	const [messageSent, setMessageSent] = useState<boolean>(false);
  const [form, setForm] = useState<FormType>({
    name: {
			value: '',
			error: false,
			dirty: false,
			validation: (value: string) => value.trim() !== '',
		},
    email: {
			value: '',
			error: false,
			dirty: false,
			validation: (value: string) => value.trim() !== '' && isValidEmail(value),
		},
    message: {
			value: '',
			error: false,
			dirty: false,
			validation: (value: string) => value.trim() !== '',
		},
  });

	const handleInputChange = (fieldName: FormFields, value: string, dirty: boolean = false) => {
		const isDirty = form[fieldName].dirty || dirty;

		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				value,
				dirty: isDirty,
				error: isDirty ? !form[fieldName].validation(value) : false,
			},
		});
	};

	const handleInputBlur = (fieldName: FormFields) => {
		handleInputChange(fieldName, form[fieldName].value, true);
	};

	const isValidForm = () => {
		let isValid = true;
		const newForm = { ...form };

		if (!form[FormFields.email].value.trim() || !isValidEmail(form[FormFields.email].value)) {
			isValid = false;
			newForm[FormFields.email].error = true;
		};

		if (!form[FormFields.name].value.trim()) {
			isValid = false;
			newForm[FormFields.name].error = true;
		};
		
		if (!form[FormFields.message].value.trim()) {
			isValid = false;
			newForm[FormFields.message].error = true;
		};

		setForm(newForm);

		return isValid;
	};

	const onSubmit = async () => {
		const isValid = isValidForm();

		if (isValid) {
			try {
				await send(
					process.env.EXPO_PUBLIC_EMAILJS_SERVICE as string,
					process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_CONTACT as string,
					{
						name: form[FormFields.name].value,
						email: form[FormFields.email].value,
						message: form[FormFields.message].value,
					},
					{
						publicKey: process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY,
					},
				);

				setMessageSent(true);
			} catch (err) {}
		}
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
				{messageSent ? (
					<View style={styles.header}>
						<Text style={styles.sent}>{t('contactUs.messageSent')}</Text>
					</View>
				) : (
					<KeyboardAwareScrollView>
						<View style={styles.header}>
							<Text style={styles.title}>{t('contactUs.title')}</Text>
							<Text style={styles.subtitle}>
								{t('contactUs.info')}
							</Text>
						</View>
						<View style={styles.form}>
							<View style={styles.input}>
								<Text
									style={[styles.inputLabel, form[FormFields.name].error ? styles.errorLabel : null]}
								>
									{t('contactUs.name')}*
								</Text>
								<TextInput
									clearButtonMode="while-editing"
									onChangeText={(value) => handleInputChange(FormFields.name, value)}
									onBlur={() => handleInputBlur(FormFields.name)}
									style={[styles.inputField, form[FormFields.name].error ? styles.errorInput : null]}
									value={form.name.value} />
							</View>
							<View style={styles.input}>
								<Text
									style={[styles.inputLabel, form[FormFields.email].error ? styles.errorLabel : null]}
								>
									{t('contactUs.email')}*
								</Text>
								<TextInput
									autoCapitalize="none"
									autoCorrect={false}
									clearButtonMode="while-editing"
									keyboardType="email-address"
									onChangeText={(value) => handleInputChange(FormFields.email, value)}
									onBlur={() => handleInputBlur(FormFields.email)}
									style={[styles.inputField, form[FormFields.email].error ? styles.errorInput : null]}
									value={form.email.value}
								/>
							</View>
							<View style={styles.input}>
								<Text
									style={[styles.inputLabel, form[FormFields.message].error ? styles.errorLabel : null]}
								>
									{t('contactUs.message')}*
								</Text>
								<TextInput
									clearButtonMode="while-editing"
									onChangeText={(value) => handleInputChange(FormFields.message, value)}
									onBlur={() => handleInputBlur(FormFields.message)}
									style={[styles.inputField, styles.message, form[FormFields.message].error ? styles.errorInput : null]}
									value={form.message.value}
									multiline
								/>
							</View>
							<View style={styles.formAction}>
								<TouchableOpacity
									onPress={onSubmit}>
									<View style={styles.btn}>
										<Text style={styles.btnText}>{t('common.submit')}</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</KeyboardAwareScrollView>
				)}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#e8ecf4'
	},
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
		backgroundColor: '#eee'
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
	sent: {
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
	errorLabel: {
		color: 'red'
	},
  inputField: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
	errorInput: {
		borderColor: 'red',
	},
	message: {
		height: 100,
		paddingTop: 12
	},
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
