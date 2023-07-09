import AuthStack from '@auth/index';
import MakeRefund from '@components/uikit/MakeRefund';
import Search from '@components/uikit/search';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';
import TabNavigation from '@home/bottomTab/TabNavigation';
import {CheckoutScreen} from '@home/cart/checkout';
import WebViewComponets from '@home/cart/checkout/OrderModal/WebView';
import CatalogProductsScreen from '@home/catalog/catalogProducts/CatalogProductsScreen';
import Subcategory from '@home/catalog/subCatalog/Subcategory';
import AllNews from '@home/home/AllNews/AllNews';
import AllShop from '@home/home/Allshop/AllShop';
import AllProducts from '@home/home/allProducts/view';
import Reviews from '@home/modulus/components/reviews';
import NewDetails from '@home/modulus/news-details/NewDetails';
import PdoductDetails from '@home/modulus/product-details/PdoductDetails';
import ShopDetails from '@home/modulus/shop-details/ShopDetails';
import BonusProgram from '@home/profile/BonusProgram/BonusProgram';
import Message from '@home/profile/Message/Message';
import ChatProducts from '@home/profile/Message/components/ChatProduct/ChatProduct';
import Chat from '@home/profile/Message/components/chat/Chat';
import MyProduct from '@home/profile/MyOrders/MyOrders';
import ActiveList from '@home/profile/MyOrders/components/ActiveList/ActiveList';
import StoryList from '@home/profile/MyOrders/components/StoreList/StoryList';
import OrderView from '@home/profile/MyOrders/components/order/OrderView';
import Notification from '@home/profile/Notification/Notification';
import PersonalDataChange from '@home/profile/PersonDataChange/PersonDataChange';
import PersonalData from '@home/profile/PersonalData/PersonalData';
import ProfileScreen from '@home/profile/ProfileScreen';
import Setting from '@home/profile/Setting/Setting';
import TechnicalSupport from '@home/profile/Technical_Support/TechnicalSupport';
import Transactions from '@home/profile/Transactions/Transactions';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NavigationService from './NavigationService';
import Camera from '@components/uikit/Camera/Camera';
import CameraScreen from '@components/uikit/Camera/Camera';
// import Chat from '@home/profile/Notification/components/chat';

let Stack = createNativeStackNavigator();

export default function AppRouter() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
        backgroundColor: COLORS.tabBgColor,
      }}>
      <NavigationContainer ref={NavigationService.ref}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* {!user.token ? (
            <>
              <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            </>
          ) : (
            <> */}
          <Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
          {/* <Stack.Screen name={ROUTES.TABS2} component={TabNavigation2} /> */}
          <Stack.Screen name={ROUTES.ALLPRODUCTS} component={AllProducts} />
          <Stack.Screen name={ROUTES.ALLSHOPS} component={AllShop} />
          <Stack.Screen name={ROUTES.ALLNEWS} component={AllNews} />
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
          <Stack.Screen name={ROUTES.SHOPDETAILS} component={ShopDetails} />
          <Stack.Screen name={ROUTES.NEWDETAILS} component={NewDetails} />
          <Stack.Screen name={ROUTES.CHECKOUT} component={CheckoutScreen} />
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
          <Stack.Screen name={ROUTES.SEARCH} component={Search} />
          <Stack.Screen name={ROUTES.ORDERVIEW} component={OrderView} />
          <Stack.Screen name={ROUTES.MAKEREFUND} component={MakeRefund} />
          <Stack.Screen name={ROUTES.CHAT} component={Chat} />
          <Stack.Screen name={ROUTES.CHATPRODUCTS} component={ChatProducts} />
          <Stack.Screen name={ROUTES.WebView} component={WebViewComponets} />
          <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
          <Stack.Screen name={ROUTES.Camera} component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
