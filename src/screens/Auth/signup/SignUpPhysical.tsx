import SingUpTemplate from '../../../components/template/SingUpTemplate';
import CheckBox from '../../../components/uikit/CheckBox';
import DefaultButton from '../../../components/uikit/DefaultButton';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import {COLORS} from '../../../constants/colors';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

import moment from 'moment';
import useRegisterHook from './hooks';
import {STRINGS} from '@locales/strings';
import DefaultInputEye from '@components/uikit/DefaultInputEye';

// export interface RegisterStatePyhsical {
//   phone: string;
//   name: string;
//   // lastName?: string;
//   // middleName?: string;
//   // birthday?: string;
//   password: string;
//   type: string;
// }
export default function SignUpPhysical() {
  let {
    loading,
    onStateChange,
    onRegister,
    state,
    onRegisterNavigation,
    errTxt,
  } = useRegisterHook();
  let navigation = useNavigation();
  // const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)
  // const formatDate = (date: Date) => setState({ ...state, birthday: moment(date).format('DD.MM.YYYY') })
  const [diseblet, setDiseblet] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <View style={{backgroundColor: COLORS.white}}>
        <DefaultInput
          placeholder="Ваш номер"
          label="Номер телефона"
          backgroundColor={COLORS.noActiveButtonBgColor2}
          placeholderColor={COLORS.labelText}
          marginBottom={0}
          onChangeText={onStateChange('phone')}
          value={state.phone}
        />
        <DefaultInput
          placeholder="Ваше имя"
          label="Имя"
          backgroundColor={COLORS.noActiveButtonBgColor2}
          placeholderColor={COLORS.labelText}
          marginBottom={0}
          onChangeText={onStateChange('name')}
          value={state.name}
        />

        <DefaultInputEye
          label="Ваш пароль"
          placeholder="Ваш пароль"
          backgroundColor={COLORS.noActiveButtonBgColor2}
          inputStyle={COLORS.noActiveButtonBgColor2}
          color={COLORS.gray}
          placeholderColor={COLORS.gray}
          onChange={onStateChange('password')}
          value={state.password}
        />

        {/* <DefaultInput
        placeholder="Ваша фамилия"
        label="Фамилия"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('lastName')}
        value={state.lastName}
      />
      <DefaultInput
        placeholder="Ваше отчество"
        label="Отчество"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('middleName')}
        value={state.middleName}
      /> */}
        {/* <DefaultInput
        placeholder="Ваша дата рождения"
        label="Дата рождения"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        value={state.birthday}
        onFocus={() => setOpen(true)}
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
          <CheckBox label="Я согласен с условиями" checkout={!diseblet} />
        </TouchableOpacity>

        <DefaultButton
          onPress={() => onRegister('fiz')}
          title="Далее"
          ButtonStyle={{
            backgroundColor: diseblet
              ? COLORS.noActiveButtonBgColor2
              : COLORS.activeButtonBgColor,
            width: '100%',
          }}
          TextStyle={{color: COLORS.white}}
          loading={loading}
          disabled={diseblet}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
