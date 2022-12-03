import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import DefaultButton from '../../../components/uikit/DefaultButton';
import { COLORS } from '../../../constants/colors';
import useVerificationForgetHook from './hooks';

export default function VerificationForget(props: any) {
  let {
    timeLeft,
    onChangePhoneNumber,
    state,
    onStateChange,
    onVerificate,
    loading,
    resendCode,
  } = useVerificationForgetHook();

  return (
    <SingUpTemplate>
      <SectionTitle title="Введите код" marginBottom={36} />
      <Text style={{ marginBottom: 25, color: COLORS.labelText }}>
        Мы отправили код на{' '}
        <Text style={{ fontWeight: '700', color: COLORS.labelText }}>{state.phone}</Text>
      </Text>
      <TouchableOpacity onPress={onChangePhoneNumber}>
        <Text style={{ color: '#84A9C0', marginBottom: 25 }}>Изменить номер</Text>
      </TouchableOpacity>
      <DefaultInput
        placeholder="Код подтверждения"
        label="Введите полученный код"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('code')}
        value={state.code}
      />
      {timeLeft > 0 ? (
        <Text style={{ color: '#84A9C0', marginBottom: 25 }}>
          Отправить повторно через {timeLeft}
        </Text>
      ) : null}
      <DefaultButton
        title="Переотправить"
        disabled={timeLeft !== 0}
        onPress={resendCode}
        ButtonStyle={{
          backgroundColor: timeLeft !== 0 ? COLORS.noActiveButtonBgColor2 : COLORS.activeButtonBgColor,
          width: '100%',
          marginTop: 10,
        }}
        TextStyle={{ color: timeLeft !== 0 ? COLORS.labelText : COLORS.white }}
      />
      <DefaultButton
        title="Подтвердить"
        loading={loading}
        onPress={onVerificate}
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{ color: COLORS.white }}
      />
      <TouchableOpacity onPress={onChangePhoneNumber}>
        <Text style={{ color: '#84A9C0', marginBottom: 25 }}>
          Уже зарегистрированы?
        </Text>
      </TouchableOpacity>
    </SingUpTemplate>
  );
}
