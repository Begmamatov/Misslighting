import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultButton from '../../../components/uikit/DefaultButton';
import { COLORS } from '../../../constants/colors';
import DefaultInput from '../../../components/uikit/TextInput';
import CheckBox from '../../../components/uikit/CheckBox';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/routes';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import useRegisterHook from './hooks';

// export interface RegisterStateLegal {
//   account: string;
//   inn: string;
//   bank: string;
//   address_legal: string;
//   oked: string;
//   okohx: string;
//   mfo: string;
//   name: string;
//   phone: string;
//   type: string;
// }

export default function SignUpLegal() {
  let navigation = useNavigation();
  // const [state, setState] = useState<RegisterStateLegal>({
  //   account: '',
  //   inn: '',
  //   bank: '',
  //   address_legal: '',
  //   oked: '',
  //   okohx: '',
  //   mfo: '',
  //   name: '',
  //   phone: '',
  //   type: 'yur',
  // });

  let {
    loading,
    onStateChange,
    onRegister,
    state,
    onRegisterNavigation,
    errTxt,
  } = useRegisterHook();

  return (
    <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
      <DefaultInput
        placeholder=""
        label="Расчетный счет"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('account')}
        value={state.account}
      />
      <DefaultInput
        placeholder=""
        label="ИНН"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('inn')}
        value={state.inn}
      />
      {/* <DefaultInput
        placeholder=""
        label="Свидетельство гос.регистрации"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('certificateOfStateRegistration')}
        value={state.certificateOfStateRegistration}
      /> */}
      <DefaultInput
        placeholder=""
        label="Банк"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('bank')}
        value={state.bank}
      />
      <DefaultInput
        placeholder=""
        label="Юридический адрес"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('address_legal')}
        value={state.address_legal}
      />
      <DefaultInput
        placeholder=""
        label="ОКЕД"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('oked')}
        value={state.oked}
      />
      <DefaultInput
        placeholder=""
        label="OKOHX"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('okohx')}
        value={state.okohx}
      />
      <DefaultInput
        placeholder=""
        label="МФО"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('okohx')}
        value={state.okohx}
      />
      <DefaultInput
        placeholder=""
        label="Имя"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('name')}
        value={state.name}
      />
      <DefaultInput
        placeholder=""
        label="Введите пароль"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('name')}
        value={state.name}
      />
      {/* <DefaultInput
        placeholder=""
        label="Фамилия"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('lastName')}
        value={state.lastName}
      />
      <DefaultInput
        placeholder=""
        label="Отчество"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('middleName')}
        value={state.middleName}
      /> */}
      <DefaultInput
        placeholder=""
        label="Телефон"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('phone')}
        value={state.phone}
      />
      {/* <DefaultInput
        placeholder=""
        label="Дата рождения"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onFocus={() => setOpen(true)}
        value={state.birthday}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          formatDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}
      <CheckBox label="Согласен с политикой конфиденциальности" />
      <DefaultButton
        title="Далее"
        onPress={() => onRegister('yur')}
        loading={loading}
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{ color: COLORS.white }}
      />
    </ScrollView>
  );
}
