import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ActiveList from './components/ActiveList';
import StoryList from './components/StoryList';
import {COLORS} from '@constants/colors';

const Tab = createMaterialTopTabNavigator();

const MyProduct = () => {
  const width = Dimensions.get('window').width / 2;

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Мои заказы</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: '#84A9C0',
          tabBarInactiveTintColor: 'black',
          tabBarItemStyle: {width: width},

          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Tab.Screen name="Активные" component={ActiveList} />
        <Tab.Screen name="История" component={StoryList} />
      </Tab.Navigator>
    </View>
  );
};

export default MyProduct;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  position: {
    position: 'absolute',
    width: 180,
    height: 47,
    backgroundColor: '#84A9C0',
    borderRadius: 45,
    top: 0,
    right: 0,
    zIndex: 2,
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '600',
    zIndex: 100,
    color: COLORS.black,
  },
  switchBtns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 45,
    marginHorizontal: 20,
    paddingVertical: 15,
    overflow: 'hidden',
  },
  ActiveBtn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 45,
    color: '#fff',
  },
  textNoActive: {
    fontWeight: '600',
    zIndex: 100,
  },
  textNone: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 45,
  },
  textActive: {
    fontWeight: '600',
    zIndex: 100,
  },
  itemProduct: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  itemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'rgba(113, 113, 113, 0.1)',
  },
  itemHeader2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  itemFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: 'rgba(113, 113, 113, 0.1)',
  },
  btnMore: {
    paddingVertical: 10,
    paddingHorizontal: 21,
    backgroundColor: '#84A9C0',
    borderRadius: 45,
  },
  itemTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    color: '#C8C8C8',
    paddingTop: 5,
  },
  itemTextRed: {
    color: 'red',
    fontSize: 14,
  },
});
{
  /* <View style={styles.switchBtns}>
        <TouchableOpacity
          style={[
            styles.position,
            {left: state ? 0 : '50%'},
          ]}></TouchableOpacity>
        <TouchableOpacity style={{zIndex: 100}} onPress={ActiveHandler}>
          <Text style={[styles.textActive, {color: state ? '#fff' : '#777'}]}>
            Активные
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{zIndex: 100}} onPress={StoryHandler}>
          <Text style={[styles.textNoActive, {color: state ? '#777' : '#fff'}]}>
            История
          </Text>
        </TouchableOpacity>
      </View> */
}
