import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@constants/routes';

import TabNavigation from '@home/bottomTab/TabNavigation';
import { useAppSelector } from '@store/hooks';
import { selectUser } from '@store/slices/userSlice';
import AuthStack from '@auth/index';
import AllProducts from '@home/home/allProducts/view';
import SortView from '@components/uikit/Sort/SortView';
import FilterScren from '@components/template/FilterScreen';
import Subcategory from '@home/catalog/Subcategory';
import ProductDetails from '../screens/Home/modulus/product-details/PdoductDetails';
import Reviews from '@home/modulus/components/reviews';
import { CheckoutScreen } from '@home/cart/checkout';
let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);
  return (
    <View style={{ flex: 1, marginTop: insets.top }}>
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
              <Stack.Screen name={ROUTES.ALLPRODUCTS} component={AllProducts} />
              <Stack.Screen name={ROUTES.SORTVIEW} component={SortView} />
              <Stack.Screen name={ROUTES.FILTERVIEW} component={FilterScren} />
              <Stack.Screen name={ROUTES.SUBCATEGORY} component={Subcategory} />
              <Stack.Screen name={ROUTES.REVIEWS} component={Reviews} />
              <Stack.Screen
                name={ROUTES.PRODUCTDETAILS}
                component={ProductDetails}
              />
              <Stack.Screen name={ROUTES.CHECKOUT} component={CheckoutScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
