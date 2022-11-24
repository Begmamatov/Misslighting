import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import WelcomeScreen from '@components/template/WelcomeScreen'
import DefaultInput from '@components/uikit/TextInput'
import DefaultButton from '@components/uikit/DefaultButton'
import { ROUTES } from '@constants/routes'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '@store/hooks'
import { LoginState } from '@api/types'
import { validatePhoneNumber } from '@constants/validation'
import requests from '@api/requests'
import { userLoggedIn } from '@store/slices/userSlice'

export default function Login(props: any) {

    let navigation = useNavigation();
    let dispatch = useAppDispatch();
    const [state, setState] = useState<LoginState>({
        password: "shox1223",
        phone: "+998993103763",
    });

    const onLogin = async () => {
        if (validatePhoneNumber(state.phone as string)) {
            try {
                let res = await requests.auth.login(state);
                dispatch(userLoggedIn(res.data));
                console.log('====================================');
                console.log('res------', JSON.stringify(res.data, null, 2));
                console.log('====================================');
            }
            catch (e) {
                console.log('Error---', e);
            }
        }
        else {
            console.log("Invalid phone number");
        }
    }

    let onStateChange = (key: string) => (value: string) => {
        setState({ ...state, [key]: value });
    };

    const onPressRegister = () => {
        props.navigation.navigate(ROUTES.REGISTER)
    }
    const onPressForgotPassword = () => {
        props.navigation.navigate(ROUTES.FORGOTPASSWORD)
    }
    const onPressTabs = () => {
        props.navigation.navigate(ROUTES.TABS)
    }

    return (
        <WelcomeScreen title='Вход'>
            <DefaultInput placeholder='Ваш номер' onChangeText={onStateChange('phone')} value={state.phone} />
            <DefaultInput placeholder='Ваш пароль' onChangeText={onStateChange('password')} value={state.password} />
            <Text style={styles.text}>Забыли пароль?</Text>
            <DefaultButton title='Войти' onPress={onLogin} />
            <DefaultButton title='Регистрация' onPress={onPressRegister} />
        </WelcomeScreen>
    )
}

const styles = StyleSheet.create({
    text: {
        width: "97%",
        textAlign: "left",
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        marginBottom: 25,
    },
})