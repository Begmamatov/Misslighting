import { View, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'
import SectionTitle from '@components/uikit/SectionTitle';
import DefaultButton from '@components/uikit/DefaultButton';
import DefaultInput from '@components/uikit/TextInput';
import CheckBox from '@components/uikit/CheckBox';
import SingUpTemplate from '@components/template/SingUpTemplate';
import { ROUTES } from '@constants/routes';


export default function SignUpPhysical(props: any) {

    const onPressNext = () => {
        props.navigation.navigate(ROUTES.PASSWORDSCREEN)
    }

    return (
        <SingUpTemplate>
            <SectionTitle title="Регистрация" marginBottom={36} />
            <View style={styles.buttonsBox}>
                <DefaultButton
                    title='Физическое лицо'
                    ButtonStyle={{ backgroundColor: COLORS.activeButtonBgColor, width: '50%' }}
                    TextStyle={{ color: COLORS.white, fontSize: 14 }}
                />
                <DefaultButton
                    title='Юридическое лицо'
                    ButtonStyle={{
                        backgroundColor: COLORS.noActiveButtonBgColor2,
                        width: '50%',
                    }}
                    TextStyle={{ color: COLORS.noActiveButtonTextColor, fontSize: 14 }}
                />
            </View>
            <DefaultInput placeholder='Ваш номер' label='Номер телефона' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='Ваше имя' label='Имя' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='Ваша фамилия' label='Фамилия' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='Ваше отчество' label='Отчество' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <DefaultInput placeholder='Ваша дата рождения' label='Дата рождения' backgroundColor={COLORS.noActiveButtonBgColor2} placeholderColor={COLORS.labelText} marginBottom={0} />
            <CheckBox label='Я согласен с условиями' />
            <DefaultButton onPress={onPressNext} title='Далее' ButtonStyle={{ backgroundColor: COLORS.activeButtonBgColor, width: '100%' }} TextStyle={{ color: COLORS.white }} />
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