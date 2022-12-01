import {ROUTES} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Favorite from './controller';

let Stack = createNativeStackNavigator();

const FavoritesScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Favorite} name={ROUTES.FAVORITES} />
    </Stack.Navigator>
  );
};
export default FavoritesScreen;
