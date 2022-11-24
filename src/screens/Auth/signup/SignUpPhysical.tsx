import SingUpTemplate from '../../../components/template/SingUpTemplate';
import CheckBox from '../../../components/uikit/CheckBox';
import DefaultButton from '../../../components/uikit/DefaultButton';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import {COLORS} from '../../../constants/colors';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

export interface RegisterState {
  phone: string;
  name: string;
  lastName?: string;
  middleName?: string;
  birthday?: string;
}
export default function SignUpPhysical() {
  const [state, setState] = useState<RegisterState>({
    phone: '',
    name: '',
  });

  const onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };
  let navigation = useNavigation();

  return (
    <SingUpTemplate>
      <SectionTitle title="Регистрация" marginBottom={36} />
      <View style={styles.buttonsBox}>
        <DefaultButton
          title="Физическое лицо"
          // eslint-disable-next-line react-native/no-inline-styles
          ButtonStyle={{
            backgroundColor: COLORS.activeButtonBgColor,
            width: '50%',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          TextStyle={{color: COLORS.white, fontSize: 14}}
        />
        <DefaultButton
          onPress={() => navigation.navigate(ROUTES.REGISTERLEGAL as never)}
          title="Юридическое лицо"
          // eslint-disable-next-line react-native/no-inline-styles
          ButtonStyle={{
            backgroundColor: COLORS.noActiveButtonBgColor2,
            width: '50%',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          TextStyle={{color: COLORS.noActiveButtonTextColor, fontSize: 14}}
        />
      </View>
      <DefaultInput
        placeholder="Ваш номер"
        label="Номер телефона"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChange={onStateChange('phone')}
        value={state.phone}
      />
      <DefaultInput
        placeholder="Ваше имя"
        label="Имя"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChange={onStateChange('name')}
        value={state.name}
      />
      <DefaultInput
        placeholder="Ваша фамилия"
        label="Фамилия"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChange={onStateChange('lastName')}
        value={state.lastName}
      />
      <DefaultInput
        placeholder="Ваше отчество"
        label="Отчество"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChange={onStateChange('middleName')}
        value={state.middleName}
      />
      <DefaultInput
        placeholder="Ваша дата рождения"
        label="Дата рождения"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChange={onStateChange('birthday')}
        value={state.birthday}
      />
      <CheckBox label="Я согласен с условиями" />
      <DefaultButton
        onPress={() => navigation.navigate(ROUTES.VERIFICATION)}
        title="Далее"
        // eslint-disable-next-line react-native/no-inline-styles
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
      />
    </SingUpTemplate>
  );
}

const styles = StyleSheet.create({
  buttonsBox: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.noActiveButtonBgColor2,
    borderRadius: 45,
    height: 55,
    marginBottom: 30,
  },
});
