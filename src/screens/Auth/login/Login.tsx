import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import WelcomeScreen from '@components/template/WelcomeScreen'
import DefaultInput from '@components/uikit/TextInput'
import DefaultButton from '@components/uikit/DefaultButton'

export default function Login() {
    return (
        <WelcomeScreen title='Вход'>
            <DefaultInput placeholder='Ваш номер' />
            <DefaultInput placeholder='Ваш пароль' />
            <Text style={styles.text}>Забыли пароль?</Text>
            <DefaultButton title='Войти' />
            <DefaultButton title='Регистрация' />
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