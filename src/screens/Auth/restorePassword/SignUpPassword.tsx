import React from 'react';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import {COLORS} from '../../../constants/colors';
import DefaultButton from '../../../components/uikit/DefaultButton';

export default function SignUpPassword() {
  return (
    <SingUpTemplate>
      <SectionTitle title="Регистрация" marginBottom={36} />
      <DefaultInput
        placeholder="Ваш пароль"
        label="Введите пароль"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
      />
      <DefaultInput
        placeholder="Введите повторно"
        label="Подтвердите пароль"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
      />
      <DefaultButton
        title="Далее"
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
      />
    </SingUpTemplate>
  );
}
