import SingUpTemplate from '../../../components/template/SingUpTemplate';
import CheckBox from '../../../components/uikit/CheckBox';
import DefaultButton from '../../../components/uikit/DefaultButton';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import {COLORS} from '../../../constants/colors';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import useRegisterHook from './hooks';

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

  return (
    <ScrollView
      style={{backgroundColor: COLORS.white}}
      showsVerticalScrollIndicator={false}>
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
      <DefaultInput
        placeholder="Ваш пароль"
        label="Введите пароль"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        onChangeText={onStateChange('password')}
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
      <CheckBox label="Я согласен с условиями" />
      <DefaultButton
        onPress={() => onRegister('fiz')}
        title="Далее"
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{color: COLORS.white}}
        loading={loading}
      />
    </ScrollView>
  );
}
