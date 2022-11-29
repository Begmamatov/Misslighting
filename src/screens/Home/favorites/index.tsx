import {ROUTES} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductDetailsView from '../modulus/product-details/PdoductDetails';
import Favorite from './controller';

let Stack = createNativeStackNavigator();

const FavoritesScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Favorite} name={ROUTES.FAVORITES} />
      <Stack.Screen
        component={ProductDetailsView}
        name={ROUTES.PRODUCTDETAILS}
      />
    </Stack.Navigator>
  );
};
export default FavoritesScreen;
