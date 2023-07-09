import requests, {appendUrl} from '@api/requests';
import {
  DeliveryMethodResponse,
  LoginResponse,
  PaymentMethodResponse,
} from '@api/types';
import DefaultButton from '@components/uikit/DefaultButton';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';

import DefaultInput from '@components/uikit/TextInput';
import {COLORS} from '@constants/colors';
import DefaultHeader from '@home/favorites/components/DefaultHeader';
import {STRINGS} from '@locales/strings';
import {useNavigation, useRoute} from '@react-navigation/native';
import useLoading from '@store/Loader/useLoading';
import {loadCart} from '@store/slices/cartSlice';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  LayoutAnimation,
  Modal,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import CourierDelivery from '../components/CourierDelivery';
import PickupPoints from '../components/PickupPoints';

import OrderModal from './OrderModal/OrderModal';
import {styles} from './style';
import {NewTopArrowIcon2} from '@icons/icons';
type ProfileData = Partial<LoginResponse>;
const CheckoutView = () => {
  const route = useRoute();
  const item: any = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setIsActive] = useState(0);
  const [delivery, setDelivery] = useState<DeliveryMethodResponse[]>();
  const [payment, setPayment] = useState<PaymentMethodResponse[]>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [orderValyu, setOrderValyu] = useState();

  const [profileData, setProfileData] = useState<any>();
  const [state, setState] = useState<any>({
    address: '',
    comment: '',
    delivery_id: 1,
    email: '',
    lastName: '',
    name: '',
    payment_id: 0,
    phone: '',
    receiver: 0,
    phone2: '',
  });
  const loading = useLoading();
  const fetchData = async () => {
    try {
      let res = await requests.profile.getProfile();
      setProfileData(res.data.data);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleSnackbar = () => setVisibleSnackbar(!visibleSnackbar);

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
    setState({
      address: profileData?.last_address ?? '',
      comment: '',
      delivery_id: 1,
      email: '',
      lastName: '',
      name: profileData?.name ?? '',
      payment_id: 0,
      phone: profileData?.phone ?? '',
      receiver: 0,
      phone2: '',
    });
  }, [profileData]);

  useEffect(() => {
    effect();
    fetchData();
  }, []);
  let onStateChange = (key: string) => (value: string) => {
    setState({...state, [key]: value});
  };
  const sendProduct = async () => {
    if (state.address.length > 0) {
      await sendOrder();
    } else {
      return Alert.alert(`Ошибка `, 'Вы не ввели свой адрес');
    }
  };

  const sendOrder = async () => {
    try {
      loading?.onRun();
      let res = await requests.order.sendOrder(state);
      let cartGet = await requests.products.getCarts();
      dispatch(loadCart(cartGet.data.data));
      toggleSnackbar();
      setOrderValyu(res.data.data);
      setOpenOrderModal(prev => !prev);
    } catch (error) {
      console.log(error);
    } finally {
      loading?.onClose();
    }
  };
  const onClose = () => {
    navigation.goBack();
  };

  // console.log(JSON.stringify(state, null, 2));

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <GoBackHeader />
        <DefaultHeader name="Оформление заказа" />
        <View style={styles.deliveryContainer}>
          <Text style={styles.headerTxt}>{STRINGS.ru.deliveryChoose}</Text>
          {delivery?.map((item, index) => {
            return (
              <TouchableOpacity
                style={activeIndex === item.id ? styles.activeBox : styles.box}
                onPress={() => {
                  setIsActive(item.id),
                    setState({...state, delivery_id: item.id});
                }}
                key={index}>
                <View
                  style={
                    activeIndex === item.id
                      ? styles.activeBorder
                      : styles.border
                  }>
                  <View
                    style={
                      activeIndex === item.id ? styles.activeDot : styles.dot
                    }></View>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.text}>{item?.name}</Text>
                  {item?.description ? (
                    <Text style={styles.comment}>{item?.description}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* {open ? (
          <View style={styles.noActive}>
            <TouchableOpacity
              style={styles.boActive_box}
              onPress={() => setModalShow(true)}>
              <Text style={{color: COLORS.black, fontSize: 14}}>
                Выберите логистическую компанию
              </Text>
              <NewTopArrowIcon2 />
            </TouchableOpacity>
          </View>
        ) : null} */}

        <View style={styles.pickupContainer}>
          <View style={styles.pickupBox}>
            <Text style={styles.boxTxt}>
              Срок доставки будет расчитан после
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
                      source={{uri: appendUrl(e.product.photo)}}
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
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                trackColor={{
                  false: COLORS.noActiveButtonBgColor2,
                  true: COLORS.activeButtonBgColor,
                }}
                thumbColor={COLORS.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {activeIndex == 0 ? (
              <CourierDelivery
                onStateChange={onStateChange}
                typePayment={payment as any}
              />
            ) : (
              <PickupPoints
                onStateChange={onStateChange}
                typePayment={payment as any}
              />
            )}

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
            onPress={sendProduct}
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 20,
              marginBotton: 30,
            }}
            TextStyle={{color: COLORS.white}}
          />
        </View>
        <Snackbar
          visible={visibleSnackbar}
          onDismiss={toggleSnackbar}
          duration={4000}>
          Заказ оформлен успешно!
        </Snackbar>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openOrderModal}
        onRequestClose={() => {}}>
        <TouchableOpacity
          onPress={() => {
            setOpenOrderModal(false), onClose();
          }}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <OrderModal
            orderValyu={orderValyu}
            setOpenOrderModal={setOpenOrderModal}
            onClose={onClose}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default CheckoutView;
