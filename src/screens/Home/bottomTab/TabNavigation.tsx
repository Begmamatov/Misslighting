import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/HomeScreen';

import CatalogScreen from '../catalog/CatalogScreen';
import CartScreen from '../cart/view';
import {
  CartIconActive,
  CartIconNotActive,
  CatalogIconActive,
  CatalogIconNotActive,
  HeartIconActive,
  HeartIconNotActive,
  HomeIconActive,
  HomeIconNotActive,
  ProfileIconActive,
  ProfileIconNotActive,
} from '../../../assets/icons/icons';
import ProfileScreen from '@home/profile/ProfileScreen';
import {useSelector} from 'react-redux';
import {favoriteArraySelector} from '@store/slices/favoriteSlice';
import {cartTotalSelector} from '@store/slices/cartSlice';
import FavoriteView from '@home/favorites/view';
import {ROUTES} from '@constants/routes';
import Tabbar from './TabNavigation2';
import {useAppSelector} from '@store/hooks';
import {selectUser} from '@store/slices/userSlice';
import AuthStack from '@auth/index';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const user = useAppSelector(selectUser);

  return (
    <>
      <Tab.Navigator
        tabBar={props => <Tabbar {...props} />}
        initialRouteName={ROUTES.TIME_LINE_STACK}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Tab.Screen name={ROUTES.FAVORITES} component={FavoriteView} />
        <Tab.Screen name={ROUTES.CATALOG} component={CatalogScreen} />
        <Tab.Screen name={ROUTES.CART} component={CartScreen} />
        {user?.token ? (
          <Tab.Screen name={ROUTES.PROFILE_STACK} component={ProfileScreen} />
        ) : (
          <Tab.Screen name={ROUTES.AUTH} component={AuthStack} />
        )}
      </Tab.Navigator>
    </>
  );
}
