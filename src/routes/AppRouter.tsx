import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@constants/routes';

import TabNavigation from '@home/bottomTab/TabNavigation';
import {useAppSelector} from '@store/hooks';
import {selectUser} from '@store/slices/userSlice';
import AuthStack from '@auth/index';
import AllProducts from '@home/home/allProducts/view';
import SortView from '@components/uikit/Sort/SortView';
import FilterScren from '@components/template/FilterScreen';
import Subcategory from '@home/catalog/subCatalog/Subcategory';
import Reviews from '@home/modulus/components/Reviews';
import {CheckoutScreen} from '@home/cart/checkout';
import ProfileScreen from '@home/profile/ProfileScreen';
import MyProduct from '@home/profile/MyOrders/MyOrders';
import Message from '@home/profile/Message/Message';
import Setting from '@home/profile/Setting/Setting';
import Transactions from '@home/profile/Transactions/Transactions';
import ActiveList from '@home/profile/MyOrders/components/ActiveList';
import StoryList from '@home/profile/MyOrders/components/StoryList';
import TechnicalSupport from '@home/profile/Technical_Support/TechnicalSupport';
import BonusProgram from '@home/profile/BonusProgram/BonusProgram';
import PersonalData from '@home/profile/PersonalData/PersonalData';
import PersonalDataChange from '@home/profile/PersonDataChange/PersonDataChange';
import Notification from '@home/profile/Notification/Notification';
import Search from '@components/uikit/search';
import CatalogProductsScreen from '@home/catalog/catalogProducts/CatalogProductsScreen';
import PdoductDetails from '@home/modulus/product-details/PdoductDetails';
import OrderView from '@home/order/OrderView';
import MakeRefund from '@components/uikit/MakeRefund';
import {COLORS} from '@constants/colors';
import {View} from 'react-native';

let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);
  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
        backgroundColor: COLORS.tabBgColor,
      }}>
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
              {/* <Stack.Screen name={ROUTES.SORTVIEW} component={SortView} /> */}
              {/* <Stack.Screen name={ROUTES.FILTERVIEW} component={FilterScren} /> */}
              <Stack.Screen name={ROUTES.SUBCATEGORY} component={Subcategory} />
              <Stack.Screen
                name={ROUTES.CATALOG_PRODUCTS}
                component={CatalogProductsScreen}
              />
              <Stack.Screen name={ROUTES.REVIEWS} component={Reviews} />
              <Stack.Screen
                name={ROUTES.PRODUCTDETAILS}
                component={PdoductDetails}
              />
              <Stack.Screen name={ROUTES.CHECKOUT} component={CheckoutScreen} />
              <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
              <Stack.Screen name={ROUTES.MY_PRODUCTS} component={MyProduct} />
              <Stack.Screen name={ROUTES.MESSAGE} component={Message} />
              <Stack.Screen name={ROUTES.PROFILE_SETTING} component={Setting} />

              <Stack.Screen
                name={ROUTES.TRANSACTIONS}
                component={Transactions}
              />
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
              <Stack.Screen
                name={ROUTES.BONUSPROGRAM}
                component={BonusProgram}
              />
              <Stack.Screen
                name={ROUTES.PERSONALDATE}
                component={PersonalData}
              />
              <Stack.Screen
                name={ROUTES.PersonalDataChange}
                component={PersonalDataChange}
              />
              <Stack.Screen name={ROUTES.SEARCH} component={Search} />
              <Stack.Screen name={ROUTES.ORDERVIEW} component={OrderView} />
              <Stack.Screen name={ROUTES.MAKEREFUND} component={MakeRefund} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
