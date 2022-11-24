import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@constants/routes';
import TabNavigation from '@home/bottomTab/TabNavigation';
import {useAppSelector} from '@store/hooks';
import {selectUser} from '@store/slices/userSlice';
import AuthStack from '@auth/index';

let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);
  return (
    <View style={{flex: 1, marginTop: insets.top}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!user.token ? (
            <>
              <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            </>
          ) : (
            <>
              <Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
