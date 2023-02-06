import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DefaultButton from '../../../components/uikit/DefaultButton';
import {COLORS} from '../../../constants/colors';
import DefaultInput from '../../../components/uikit/TextInput';
import CheckBox from '../../../components/uikit/CheckBox';
import useRegisterHook from './hooks';
import DefaultInputEye from '@components/uikit/DefaultInputEye';

export default function SignUpLegal() {
  let {
    loading,
    onStateChange,
    onRegister,
    state,
    onRegisterNavigation,
    errTxt,
  } = useRegisterHook();
  const [diseblet, setDiseblet] = useState(true);

  return (
    <View style={{backgroundColor: COLORS.white}}>
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
        onChangeText={onStateChange('mfo')}
        value={state.mfo}
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
        label="Телефон"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('phone')}
        value={state.phone}
      />
      <DefaultInputEye
        label="Введите пароль"
        placeholder=""
        backgroundColor={COLORS.noActiveButtonBgColor2}
        inputStyle={COLORS.noActiveButtonBgColor2}
        color={COLORS.gray}
        placeholderColor={COLORS.labelText}
        onChange={onStateChange('password')}
        value={state.password}
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
      <TouchableOpacity onPress={() => setDiseblet(a => !a)}>
        <CheckBox
          label="Согласен с политикой конфиденциальности"
          checkout={!diseblet}
        />
      </TouchableOpacity>
      <DefaultButton
        title="Далее"
        onPress={() => onRegister('yur')}
        loading={loading}
        ButtonStyle={{
          backgroundColor: diseblet
            ? COLORS.noActiveButtonBgColor2
            : COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
        disabled={diseblet}
      />
    </View>
  );
}
