import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import WelcomeScreen from '@components/template/WelcomeScreen';
import DefaultInput from '@components/uikit/TextInput';
import DefaultButton from '@components/uikit/DefaultButton';
import {ROUTES} from '@constants/routes';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '@store/hooks';
import {LoginState} from '@api/types';
import {validatePhoneNumber} from '@constants/validation';
import requests from '@api/requests';
import {userLoggedIn} from '@store/slices/userSlice';
import {COLORS} from '@constants/colors';
import DefaultInputEye from '@components/uikit/DefaultInputEye';

export default function Login(props: any) {
  let navigation = useNavigation();
  let dispatch = useAppDispatch();
  const [state, setState] = useState<LoginState>({
    password: '300521',
    phone: '+998901951625',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = async () => {
    if (validatePhoneNumber(state.phone as string)) {
      try {
        setLoading(true);
        let res = await requests.auth.login(state);
        dispatch(userLoggedIn(res.data));
      } catch (e: any) {
        Alert.alert((e.message as any) || 'Ошибка');
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Invalid phone number');
    }
  };

  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };

  const onPressRegister = () => {
    props.navigation.navigate(ROUTES.REGISTER);
  };
  const onPressForgotPassword = () => {
    props.navigation.navigate(ROUTES.FORGOTPASSWORD);
  };

  return (
    <WelcomeScreen title="Вход">
      <DefaultInput
        placeholder="Ваш номер"
        onChangeText={onStateChange('phone')}
        value={state.phone}
      />
      {/* <DefaultInput
        placeholder="Ваш пароль"
        onChangeText={onStateChange('password')}
        value={state.password}
      /> */}
      <DefaultInputEye
        placeholder="Ваш пароль"
        onChange={onStateChange('password')}
        backgroundColor={COLORS.white}
        inputStyle={COLORS.white}
        value={state.password}
        color={COLORS.black}
        placeholderColor={COLORS.gray}
      />
      <TouchableOpacity
        onPress={onPressForgotPassword}
        style={styles.forgotPassword}
        hitSlop={{left: 20, right: 20, bottom: 20, top: 20}}>
        <Text style={styles.text}>Забыли пароль?</Text>
      </TouchableOpacity>
      <DefaultButton
        title="Войти"
        onPress={onLogin}
        loading={loading}
        loadingColor={COLORS.black}
      />
      <DefaultButton title="Регистрация" onPress={onPressRegister} />
    </WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  text: {
    width: '97%',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 25,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
});
