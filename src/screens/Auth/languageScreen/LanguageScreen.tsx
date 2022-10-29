import React from 'react'
import FlagButton from '@components/uikit/FlagButton'
import WelcomeScreen from '@components/template/WelcomeScreen'

export default function LanguageScreen() {
    return (
        <WelcomeScreen title='Выберите язык'>
            <FlagButton flagName='ru' title='Русский' onPress={() => { }} />
            <FlagButton flagName='uz' title="O'zbek" onPress={() => { }} />
            <FlagButton flagName='en' title='English' onPress={() => { }} />
        </WelcomeScreen >
    )
}