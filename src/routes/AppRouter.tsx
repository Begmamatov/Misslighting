import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@constants/routes';
import LanguageScreen from '@auth/languageScreen/LanguageScreen';
import Login from '@auth/login/Login';
import SignUpPhysical from '@auth/signup/SignUpPhysical';
import SignUpSMS from '@auth/signup/SignUpSMS';
import TelNumberScreen from '@auth/RestorePassword/TelNumberScreen';
import TabNavigation from '@home/bottomTab/TabNavigation';
import SignUpPassword from '@auth/signup/SignUpPassword';
import AllProducts from '@home/home/allProducts/view';
import SortView from '@components/uikit/Sort/SortView';
import FilterView from '@components/uikit/Filter/FilterView';

let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();
  const user = {
    token: null,
  };

  return (
    <View style={{flex: 1, marginTop: insets.top}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={ROUTES.LANGUAGE} component={LanguageScreen} />
          <Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
          <Stack.Screen name={ROUTES.LOGIN} component={Login} />
          <Stack.Screen name={ROUTES.REGISTER} component={SignUpPhysical} />
          <Stack.Screen
            name={ROUTES.PASSWORDSCREEN}
            component={SignUpPassword}
          />
          <Stack.Screen name={ROUTES.VERIFICATION} component={SignUpSMS} />
          <Stack.Screen
            name={ROUTES.FORGOTPASSWORD}
            component={TelNumberScreen}
          />
          <Stack.Screen name={ROUTES.ALLPRODUCTS} component={AllProducts} />
          <Stack.Screen name={ROUTES.SORTVIEW} component={SortView} />
          <Stack.Screen name={ROUTES.FILTERVIEW} component={FilterView} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
