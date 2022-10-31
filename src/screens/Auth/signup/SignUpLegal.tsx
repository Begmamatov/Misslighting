import { View, StyleSheet } from 'react-native'
import React from 'react'
import SingUpTemplate from '@components/template/SingUpTemplate'
import SectionTitle from '@components/uikit/SectionTitle'
import DefaultButton from '@components/uikit/DefaultButton'
import { COLORS } from '@constants/colors'
import DefaultInput from '@components/uikit/TextInput'
import CheckBox from '@components/uikit/CheckBox'

export default function SignUpLegal() {
    return (
        <SingUpTemplate>
            <SectionTitle title="Регистрация" marginBottom={36} />
            <View style={styles.buttonsBox}>
                <DefaultButton
                    title='Физическое лицо'
                    ButtonStyle={{ backgroundColor: COLORS.noActiveButtonBgColor2, width: '50%' }}
                    TextStyle={{ color: COLORS.noActiveButtonTextColor, fontSize: 14 }}
                />
                <DefaultButton
                    title='Юридическое лицо'
                    ButtonStyle={{
                        backgroundColor: COLORS.activeButtonBgColor,
                        width: '50%',
                    }}
                    TextStyle={{ color: COLORS.white, fontSize: 14 }}
                />
            </View>
            <DefaultInput placeholder='' label='Наименование учреждения' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='ИНН' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Свидетельство гос.регистрации' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Свидетельство НДС' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Реквизиты' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Имя' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Фамилия' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Отчество' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Телефон' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='' label='Дата рождения' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <CheckBox label='Согласен с политикой конфиденциальности' />
            <DefaultButton title='Далее' ButtonStyle={{ backgroundColor: COLORS.activeButtonBgColor, width: '100%' }} TextStyle={{ color: COLORS.white }} />
        </SingUpTemplate>
    )
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
})