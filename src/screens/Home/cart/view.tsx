import {STRINGS} from '@locales/strings';
import {useNavigation} from '@react-navigation/core';
import {cartArraySelector, cartTotalSelector} from '@store/slices/cartSlice';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import DefaultHeader from '../favorites/components/DefaultHeader';
import ChooseItemNum from './components/ChooseItemNum';
import OrderDetails from './components/OrderDetails';
import {useCartScreenHooks} from './hooks';
import {styles} from './style';

import DefaultButton from '@components/uikit/DefaultButton';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';

const CartView = () => {
  let navigation: any = useNavigation();

  let cart = useSelector(cartArraySelector);

  let cartTotal = useSelector(cartTotalSelector);

  let {onClearCart, getCart} = useCartScreenHooks();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {cart.length <= 0 ? (
        <View style={styles.empty}>
          <DefaultHeader name={STRINGS.ru.cart} />
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>{STRINGS.ru.cartIsEmpty}</Text>
          </View>
        </View>
      ) : (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <DefaultHeader name={STRINGS.ru.cart} />
          <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled">
            <OrderDetails total={cartTotal} />
            <View style={{paddingHorizontal: 15}}>
              {cart.map((item, index) => {
                return <ChooseItemNum data={item} key={index} />;
              })}
            </View>
            <View style={{paddingHorizontal: 15, paddingBottom: 30}}>
              <DefaultButton
                onPress={() => navigation.navigate(ROUTES.CHECKOUT, cart)}
                title={STRINGS.ru.continueOrdering}
                ButtonStyle={{
                  backgroundColor: '#84A9C0',
                  marginTop: 48,
                }}
                TextStyle={{color: COLORS.white}}
              />
              <DefaultButton
                onPress={() => onClearCart()}
                title={STRINGS.ru.emptyCart}
                ButtonStyle={{
                  backgroundColor: COLORS.white,
                  borderWidth: 1,
                  borderColor: '#84A9C0',
                }}
                TextStyle={{color: '#84A9C0'}}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default CartView;
