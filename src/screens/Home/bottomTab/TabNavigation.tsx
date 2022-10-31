import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ROUTES } from '@constants/routes'
import HomeScreen from '@home/home/HomeScreen'
import ProfileScreen from '@home/profile/ProfileScreen'
import FavoritesScreen from '@home/favorites/FavoritesScreen'
import CatalogScreen from '@home/catalog/CatalogScreen'
import CartScreen from '@home/cart/CartScreen'
import { CartIconActive, CartIconNotActive, CatalogIconActive, CatalogIconNotActive, HeartIconActive, HeartIconNotActive, HomeIconActive, HomeIconNotActive, ProfileIconActive, ProfileIconNotActive } from '@assets/icons/icons'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
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
            }}

        >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center' }}>
                        {
                            focused ? <HomeIconActive /> : <HomeIconNotActive />
                        }
                        <Text style={{ color: focused ? '#fff' : '#fff', fontSize: 13, fontWeight: '400', marginTop: 5 }}>Главная</Text>
                    </View>
                ),
                tabBarLabelStyle: { fontSize: 14 },
            }} name={ROUTES.HOME} component={HomeScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            {
                                focused ? <HeartIconActive /> : <HeartIconNotActive />
                            }
                            <Text style={{ color: focused ? '#fff' : '#fff', fontSize: 13, fontWeight: '400', marginTop: 5 }}>Избранное</Text>
                        </View>
                    ),
                }}
                name={ROUTES.FAVORITES} component={FavoritesScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', backgroundColor: '#84A9C0', alignItems: 'center', justifyContent: 'center', borderWidth: 10, padding: 15, borderRadius: 45, borderColor: '#FBFBFB', bottom: 30 }}>
                            {
                                focused ? <CatalogIconActive /> : <CatalogIconNotActive />
                            }
                        </View>
                    ),
                }}
                name={ROUTES.CATALOG} component={CatalogScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            {
                                focused ? <CartIconActive /> : <CartIconNotActive />
                            }
                            <Text style={{ color: focused ? '#fff' : '#fff', fontSize: 13, fontWeight: '400', marginTop: 5 }}>Каталог</Text>
                        </View>
                    ),
                }}
                name={ROUTES.CART} component={CartScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            {
                                focused ? <ProfileIconActive /> : <ProfileIconNotActive />
                            }
                            <Text style={{ color: focused ? '#fff' : '#fff', fontSize: 13, fontWeight: '400', marginTop: 5 }}>Каталог</Text>
                        </View>
                    ),
                }}
                name={ROUTES.PROFILE} component={ProfileScreen} />
        </ Tab.Navigator>
    )
}