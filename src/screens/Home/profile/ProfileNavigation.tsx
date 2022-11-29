import { View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProduct from './MyProducts/MyProduct';
import ProfileScreen from './ProfileScreen';
import Message from './Message/Message';
import Setting from './Setting/Setting';
import Notification from './Notification/Notification';
import { ROUTES } from '../../../constants/routes';
import Transactions from './Transactions/Transactions';
import ActiveList from './MyProducts/components/ActiveList';
import StoryList from './MyProducts/components/StoryList';
import TechnicalSupport from './Technical_Support/TechnicalSupport';
import BonusProgram from './BonusProgram/BonusProgram';
import PersonalData from './PersonalData/PersonalData';
import PersonalDataChange from './PersonDataChange/PersonDataChange';

let Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ROUTES.MY_PRODUCTS} component={MyProduct} />
        <Stack.Screen name={ROUTES.MESSAGE} component={Message} />
        <Stack.Screen name={ROUTES.PROFILE_SETTING} component={Setting} />
        <Stack.Screen name={ROUTES.TRANSACTIONS} component={Transactions} />
        <Stack.Screen name={ROUTES.ACTIVEVELIST} component={ActiveList} />
        <Stack.Screen name={ROUTES.STORYLIST} component={StoryList} />
        <Stack.Screen
          name={ROUTES.TECHNICALSUPPORT}
          component={TechnicalSupport}
        />
        <Stack.Screen
          name={ROUTES.PROFILE_NOTIFICATION}
          component={Notification}
        />
        <Stack.Screen name={ROUTES.BONUSPROGRAM} component={BonusProgram} />
        <Stack.Screen name={ROUTES.PERSONALDATE} component={PersonalData} />
        <Stack.Screen
          name={ROUTES.PersonalDataChange}
          component={PersonalDataChange}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileNavigation;
