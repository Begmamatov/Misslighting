import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../constants/routes';
import LanguageScreen from './languageScreen/LanguageScreen';
import Login from './login/Login';
import SignUpPhysical from './signup/SignUpPhysical';
import TelNumberScreen from './RestorePassword/TelNumberScreen';
import SignUpSMS from './signup/SignUpSMS';
import SignUpPassword from './signup/SignUpPassword';

let Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={SignUpPhysical} />
      <Stack.Screen name={ROUTES.VERIFICATION} component={SignUpSMS} />
      <Stack.Screen name={ROUTES.FORGOTPASSWORD} component={TelNumberScreen} />
    </Stack.Navigator>
  );
}
