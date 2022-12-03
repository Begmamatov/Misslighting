import requests, { appendUrl } from '@api/requests';
import {
  DeliveryMethodResponse,
  OrderSend,
  PaymentMethodResponse,
} from '@api/types';
import AllProductTitle from '@components/uikit/AllProductTitle';
import DefaultButton from '@components/uikit/DefaultButton';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';

import DefaultInput from '@components/uikit/TextInput';
import { COLORS } from '@constants/colors';
import DefaultHeader from '@home/favorites/components/DefaultHeader';
import { NewTopArrowIcon, NewTopArrowIcon2 } from '@icons/icons';
import { STRINGS } from '@locales/strings';
import { useNavigation, useRoute } from '@react-navigation/native';
import { loadCart } from '@store/slices/cartSlice';
import React, { useEffect, useState } from 'react';
import {
  Image,
  LayoutAnimation,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import CourierDelivery from '../components/CourierDelivery';
import PickupPoints from '../components/PickupPoints';

import { styles } from './style';

const CheckoutView = () => {
  const route = useRoute();
  const item: any = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setIsActive] = useState(0);
  const [activeIndex2, setIsActive2] = useState(0);
  const [delivery, setDelivery] = useState<DeliveryMethodResponse[]>();
  const [payment, setPayment] = useState<PaymentMethodResponse[]>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [state, setState] = useState<OrderSend>({
    address: '',
    comment: '',
    delivery_id: 1,
    email: '',
    lastName: '',
    name: '',
    payment_id: 37,
    phone: '',
    receiver: 0,
    phone2: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleSnackbar = () => setVisibleSnackbar(!visibleSnackbar);

  const [active, setAcrive] = useState(true);

  const effect = async () => {
    try {
      let res = await requests.products.deliveryMethods();
      let res2 = await requests.products.getProductPayment();
      setDelivery(res.data.data);
      setPayment(res2.data.data as any);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    effect();
  }, []);

  let onStateChange = (key: string) => (value: string) => {
    setState({ ...state, [key]: value });
  };

  const sendOrder = async () => {
    try {
      setIsLoading(true);
      let res = await requests.order.sendOrder(state);
      let ClearRes = await requests.products.clearCart();
      let cartGet = await requests.products.getCarts();
      dispatch(loadCart(cartGet.data.data));
      toggleSnackbar();
      setTimeout(() => {
        navigation.goBack();
      }, 1500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GoBackHeader />
      <DefaultHeader name="Оформление заказа" />
      <View style={styles.deliveryContainer}>
        <Text style={styles.headerTxt}>{STRINGS.ru.deliveryChoose}</Text>

        {delivery?.map((item, i) => {
          return (
            <View key={i}>
              <TouchableOpacity
                style={activeIndex == i ? styles.activeBox : styles.box}
                onPress={() => {
                  setIsActive(i),
                    setState({ ...state, delivery_id: item.id }),
                    setAcrive(a => !a);
                }}>
                <View
                  style={
                    activeIndex === i ? styles.activeBorder : styles.border
                  }>
                  <View
                    style={
                      activeIndex === i ? styles.activeDot : styles.dot
                    }></View>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.text}>{item?.name}</Text>
                  {item?.description ? (
                    <Text style={styles.comment}>{item?.description}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.adButton}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 40,
            color: '#757575',
          }}>
          Пункт самовывоза
        </Text>
        <DefaultButton
          title="Выбрать пункт самовызова"
          ButtonStyle={{
            backgroundColor: '#84A9C0',
            marginTop: 8,
            marginBotton: 0,
          }}
          TextStyle={{ color: 'white' }}
        />
      </View>
      <View style={styles.pickupContainer}>
        <View style={styles.pickupBox}>
          <Text style={styles.boxTxt}>
            Срок доставки будет расчитан после выбора пункт самовывоза
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {item?.map((e: any, index: number) => {
              return (
                <View style={styles.boxNum} key={index}>
                  <Image
                    source={{ uri: appendUrl(e.product.photo) }}
                    style={styles.boxImage}
                  />
                  {e.amount ? (
                    <View style={styles.imageNum}>
                      <Text style={styles.num}>{e?.amount}</Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.recipientContainer}>
        <Text style={styles.recipHeaderTxt}>{STRINGS.ru.recipient}</Text>

        <View style={styles.recipBox}>
          <View style={styles.switch}>
            <Text style={styles.notMe}>{STRINGS.ru.itsNotMe}</Text>
            <Switch
              hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
              trackColor={{ false: COLORS.noActiveButtonBgColor2, true: COLORS.activeButtonBgColor }}
              thumbColor={COLORS.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          {activeIndex == 0 ? <CourierDelivery onStateChange={onStateChange} /> : <PickupPoints onStateChange={onStateChange} />}
          <DefaultInput
            label="Comment"
            backgroundColor={'#FAFAFA'}
            placeholderColor={COLORS.labelText}
            marginBottom={0}
            onChangeText={onStateChange('comment')}
            value={state.comment}
          />
          {isEnabled ? (
            <View>
              <DefaultInput
                label="Бонусами"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('receiver')}
              />
              <DefaultInput
                label="Наименование учреждения"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('address')}
                value={state.address}
              />
              <DefaultInput
                label="Имя"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('name')}
                value={state.name}
              />
              <DefaultInput
                label="Фамилия"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('lastName')}
                value={state.lastName}
              />
              <DefaultInput
                label="Email"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('email')}
                value={state.email}
              />
              <DefaultInput
                label="Номер телефона"
                backgroundColor={'#FAFAFA'}
                placeholderColor={COLORS.labelText}
                marginBottom={0}
                onChangeText={onStateChange('phone')}
                value={state.phone}
              />
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setShouldShow(!shouldShow);
                }}>
                <Text style={styles.underline}>
                  + Дополнительный номер телефона
                </Text>
              </TouchableOpacity>
              {!shouldShow ? (
                <DefaultInput
                  label="Дополнительный номер телефона"
                  backgroundColor={'#FAFAFA'}
                  placeholderColor={COLORS.labelText}
                  marginBottom={0}
                  onChangeText={onStateChange('phone2')}
                  value={state.phone2}
                />
              ) : null}
            </View>
          ) : null}
        </View>

        <DefaultButton
          title={STRINGS.ru.addOrder}
          onPress={sendOrder}
          ButtonStyle={{
            backgroundColor: '#84A9C0',
            marginTop: 20,
            marginBotton: 30,
          }}
          TextStyle={{ color: COLORS.white }}
        />
      </View>
      <Snackbar
        visible={visibleSnackbar}
        onDismiss={toggleSnackbar}
        duration={4000}>
        Заказ оформлен успешно!
      </Snackbar>
    </ScrollView>
  );
};

export default CheckoutView;
