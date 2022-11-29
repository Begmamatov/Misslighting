import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import DefaultHeader from '../favorites/components/DefaultHeader';
import ChooseItemNum from './components/ChooseItemNum';
import LocationBox from './components/LocationBox';
import OrderDetails from './components/OrderDetails';
import {useCartScreenHooks} from './hooks';
import {styles} from './style';
import {useRoute} from '@react-navigation/native';
import {cartArraySelector, cartTotalSelector} from '@store/slices/cartSlice';
import {STRINGS} from '@locales/strings';
import Text from '@components/uikit/Text';
import DefaultButton from '@components/uikit/DefaultButton';
import {ROUTES} from '@constants/routes';
import {COLORS} from '@constants/colors';

const CartView = () => {
  let rout = useRoute();

  let navigation: any = useNavigation();

  let cart = useSelector(cartArraySelector);

  let cartTotal = useSelector(cartTotalSelector);

  let {onClearCart} = useCartScreenHooks();

  if (cart.length <= 0) {
    return (
      <View style={styles.empty}>
        <DefaultHeader name={STRINGS.ru.cart} />
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>{STRINGS.ru.cartIsEmpty}</Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <DefaultHeader name={STRINGS.ru.cart} />
      <ScrollView style={styles.container}>
        <OrderDetails total={cartTotal} />
        <View style={{paddingHorizontal: 15}}>
          {cart.map((e, index) => {
            return <ChooseItemNum data={e} index={index} />;
          })}
        </View>

        <View style={{paddingHorizontal: 15}}>
          <DefaultButton
            onPress={() => navigation.navigate(ROUTES.CHECKOUT, cart)}
            title={STRINGS.ru.continueOrdering}
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 48,
            }}
            TextStyle={{color: COLORS.white}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartView;
