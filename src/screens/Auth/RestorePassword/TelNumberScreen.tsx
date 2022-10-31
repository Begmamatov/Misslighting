import React from 'react'
import SingUpTemplate from '@components/template/SingUpTemplate'
import SectionTitle from '@components/uikit/SectionTitle'
import DefaultInput from '@components/uikit/TextInput'
import { COLORS } from '@constants/colors'
import DefaultButton from '@components/uikit/DefaultButton'

export default function TelNumberScreen() {
    return (
        <SingUpTemplate>
            <SectionTitle title="Введите код" marginBottom={36} />
            <DefaultInput placeholder='' label='Номер телефона' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultButton title='Запросить код' ButtonStyle={{ backgroundColor: COLORS.activeButtonBgColor, width: '100%' }} TextStyle={{ color: COLORS.white }} />
        </SingUpTemplate>
    )
}