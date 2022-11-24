import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@constants/routes';
import MyProduct from './MyProducts/MyProduct';
import ProfileScreen from './ProfileScreen';
import Message from './Message/Message';
import Setting from './Setting/Setting';
import Notification from './Notification/Notification';
let Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ROUTES.MY_PRODUCTS} component={MyProduct} />
        <Stack.Screen name={ROUTES.MESSAGE} component={Message} />
        <Stack.Screen name={ROUTES.PROFILE_SETTING} component={Setting} />
        <Stack.Screen
          name={ROUTES.PROFILE_NOTIFICATION}
          component={Notification}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileNavigation;
