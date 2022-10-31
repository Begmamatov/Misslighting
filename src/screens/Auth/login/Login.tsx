import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import WelcomeScreen from '@components/template/WelcomeScreen'
import DefaultInput from '@components/uikit/TextInput'
import DefaultButton from '@components/uikit/DefaultButton'
import { ROUTES } from '@constants/routes'

export default function Login(props: any) {

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
            <DefaultInput placeholder='Ваш номер' />
            <DefaultInput placeholder='Ваш пароль' />
            <Text style={styles.text}>Забыли пароль?</Text>
            <DefaultButton title='Войти' onPress={onPressTabs} />
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