import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';

import {COLORS} from '@constants/colors';
import ActiveList from './components/ActiveList/ActiveList';
import StoryList from './components/StoreList/StoryList';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
  state: any;
  descriptors: any;
  position: any;
};

function MyTabBar({state, descriptors, navigation, position}: Props) {
  return (
    <View style={{flexDirection: 'row', ...styles.buttonsBox}}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                height: 55,
                borderRadius: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 25,
                backgroundColor: isFocused
                  ? COLORS.activeButtonBgColor
                  : COLORS.noActiveButtonBgColor2,
                width: '50%',
              }}>
              <Animated.Text
                style={{
                  color: isFocused
                    ? COLORS.white
                    : COLORS.noActiveButtonTextColor,
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

const MyOrders = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <GoBackHeader />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>Мои заказы</Text>
      </View>

      <Tab.Navigator
        tabBar={props => (
          <View style={{position: 'relative', paddingHorizontal: 15}}>
            <MyTabBar {...props} />
          </View>
        )}>
        <Tab.Screen name="Активные" component={ActiveList} />
        <Tab.Screen name="История" component={StoryList} />
      </Tab.Navigator>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonsBox: {
    width: '100%',
    backgroundColor: COLORS.noActiveButtonBgColor2,
    borderRadius: 45,
    height: 55,
    marginBottom: 30,
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
