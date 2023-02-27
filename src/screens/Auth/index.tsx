import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants/routes';
import LanguageScreen from './languageScreen/LanguageScreen';
import Login from './login/Login';
import TelNumberScreen from './restorePassword/ForgetPassword';
import SingUpScreen from './signup/SingUp';
import Verification from './verification/Verification';
import VerificationForget from './restorePassword/VerificationForget';

let Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={SingUpScreen} />
      <Stack.Screen name={ROUTES.VERIFICATION} component={Verification} />
      <Stack.Screen
        name={ROUTES.VERIFICATIONFORGOT}
        component={VerificationForget}
      />
      <Stack.Screen name={ROUTES.FORGOTPASSWORD} component={TelNumberScreen} />
    </Stack.Navigator>
  );
}
