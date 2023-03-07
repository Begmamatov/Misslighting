import requests from '@api/requests';
import {LoginState} from '@api/types';
import WelcomeScreen from '@components/template/WelcomeScreen';
import DefaultButton from '@components/uikit/DefaultButton';
import DefaultInputEye from '@components/uikit/DefaultInputEye';
import DefaultInput from '@components/uikit/TextInput';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';
import {validatePhoneNumber} from '@constants/validation';
import NavigationService from '@routes/NavigationService';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {selectUser, userLoggedIn} from '@store/slices/userSlice';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Login(props: any) {
  let dispatch = useAppDispatch();
  const [state, setState] = useState<LoginState>({
    password: '', //381555
    phone: '', //+998901951625
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const user = useAppSelector(selectUser);
  const onLogin = async () => {
    if (validatePhoneNumber(state.phone as string)) {
      try {
        setLoading(true);
        let res = await requests.auth.login(state);
        dispatch(userLoggedIn(res.data));
        console.log(JSON.stringify(res.data, null, 2));
        setError(!res.data);
        if (!!res.data) {
          NavigationService.navigate('TABS');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setState({password: '', phone: ''});
      }
    } else {
      Alert.alert('цифры в номере должны быть +99890******* тогда');
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

      <DefaultInputEye
        placeholder="Ваш пароль"
        onChange={onStateChange('password')}
        backgroundColor={COLORS.white}
        inputStyle={COLORS.white}
        value={state.password}
        color={COLORS.black}
        placeholderColor={COLORS.black}
      />

      {error && <Text style={styles.error}>Не верный логин и/или пароль</Text>}
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
  error: {
    color: COLORS.red,
    alignSelf: 'center',
  },
});
