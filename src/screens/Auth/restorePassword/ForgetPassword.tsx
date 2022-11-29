import requests from '@api/requests';
import { RegisterResponseErrors } from '@api/types';
import { ROUTES } from '@constants/routes';
import { validatePhoneNumber } from '@constants/validation';
import { useNavigation } from '@react-navigation/native';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { Alert } from 'react-native';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import DefaultButton from '../../../components/uikit/DefaultButton';
import SectionTitle from '../../../components/uikit/SectionTitle';
import DefaultInput from '../../../components/uikit/TextInput';
import { COLORS } from '../../../constants/colors';

export default function ForgetPassword() {
  let navigation = useNavigation();
  const [state, setState] = React.useState({
    phone: '',
  });
  const [errTxt, setErrTxt] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onStateChange = (key: string) => (value: string) => {
    setState({ ...state, [key]: value });
  };

  const onForgetPassword = async () => {
    if (validatePhoneNumber(state.phone)) {
      try {
        setLoading(true);
        let res = await requests.auth.forgetPassword(state);
        navigation.navigate(ROUTES.VERIFICATIONFORGOT as never, {
          phone: state.phone,
        } as never);
      } catch (error) {
        let err = error as AxiosError<RegisterResponseErrors>;
        Alert.alert(JSON.stringify(err) as any);
        if (axios.isAxiosError(err)) {
          // Access to config, request, and response
          // err.response?.data.errors[0].phone;
          let errText = err.response?.data.errors.phone.join(", ");
          Alert.alert(err.response?.data.errors.phone.join(", ") as string);
          // console.log(errText);
          setErrTxt(errText || "");
        } else {
          // Just a stock error
        }
      } finally {
        setLoading(false);
      }
    } else {
      // TODO warn that data is incorrect
      console.log("INCORRECT PHONE NUMBER");
    }
  };

  return (
    <SingUpTemplate>
      <SectionTitle title="Введите код" marginBottom={36} />
      <DefaultInput
        placeholder=""
        label="Номер телефона"
        backgroundColor={COLORS.noActiveButtonBgColor2}
        placeholderColor={COLORS.labelText}
        marginBottom={0}
        value={state.phone}
        onChangeText={onStateChange("phone")}
      />
      <DefaultButton
        title="Запросить код"
        onPress={onForgetPassword}
        loading={loading}
        ButtonStyle={{
          backgroundColor: COLORS.activeButtonBgColor,
          width: '100%',
        }}
        TextStyle={{ color: COLORS.white }}
      />
    </SingUpTemplate>
  );
}
