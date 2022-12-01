import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES} from '../../../constants/routes';
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
import FavoritesScreen from '@home/favorites';
import {useSelector} from 'react-redux';
import {favoriteArraySelector} from '@store/slices/favoriteSlice';
import {cartTotalSelector} from '@store/slices/cartSlice';
import ProfileScreen from '@home/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  let favs = useSelector(favoriteArraySelector);
  let total = useSelector(cartTotalSelector);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#84A9C0',
          height: 80,
          paddingBottom: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <HomeIconActive /> : <HomeIconNotActive />}
              <Text
                style={{
                  color: focused ? '#fff' : '#fff',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Главная
              </Text>
            </View>
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <HeartIconActive /> : <HeartIconNotActive />}
              <Text
                style={{
                  color: focused ? '#fff' : '#fff',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Избранное
              </Text>
            </View>
          ),
          tabBarBadge: favs?.length == 0 ? undefined : favs.length,
        }}
        name={ROUTES.FAVORITES}
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#84A9C0',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 10,
                padding: 15,
                borderRadius: 45,
                borderColor: '#FBFBFB',
                bottom: 30,
              }}>
              {focused ? <CatalogIconActive /> : <CatalogIconNotActive />}
            </View>
          ),
        }}
        name={ROUTES.CATALOG}
        component={CatalogScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <CartIconActive /> : <CartIconNotActive />}
              <Text
                style={{
                  color: focused ? '#fff' : '#fff',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Каталог
              </Text>
            </View>
          ),
          tabBarBadge: total.count == 0 ? undefined : total.count,
        }}
        name={ROUTES.CART}
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              {focused ? <ProfileIconActive /> : <ProfileIconNotActive />}
              <Text
                style={{
                  color: focused ? '#fff' : '#fff',
                  fontSize: 13,
                  fontWeight: '400',
                  marginTop: 5,
                }}>
                Профиль
              </Text>
            </View>
          ),
        }}
        name={ROUTES.PROFILE_STACK}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
