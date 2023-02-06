import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import requests from '@api/requests';
import DefaultInput from '@components/uikit/TextInput';
import {
  OrderStatusBacgroundColor,
  OrderStatusText,
} from '@constants/OrderStatusColorAndText';
import {STRINGS} from '@locales/strings';
import {useRoute} from '@react-navigation/native';
import useLoading from '@store/Loader/useLoading';
import ReactNativeModal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import DefaultButton from '../../../../../../components/uikit/DefaultButton';
import GoBackHeader from '../../../../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '../../../../../../constants/colors';
import ItemCart from './components/ItemCart';
import ItemView from './components/ItemView';
import ProductOrder from './components/ProductOrder';

export type Order = {
  title?: string;
  goods?: number;
  item?: any;
};

const OrderView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rate, setRate] = useState<any>(0);
  const [detailValyu, setDetailValyu] = useState<any>();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const route = useRoute<any>();
  const id = route.params.id;
  const loading = useLoading();
  const [idDetail, setIdDetail] = useState(0);
  const [review, setReview] = useState<any>({
    product_id: idDetail,
    rate: rate,
    review: '',
  });

  let onStateChange = (key: string) => (value: string) => {
    setReview((e: any) => ({...e, [key]: value}));
  };
  const detailSee = async () => {
    try {
      let res = await requests.order.DetailedSeee(id);
      setDetailValyu(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onSendReview = async () => {
    try {
      loading?.onRun();
      let res = await requests.products.sendReview({
        rate: review.rate,
        review: review.review,
        product_id: review.product_id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setModalOpen(false);
      loading?.onClose();
    }
  };
  useEffect(() => {
    detailSee();
  }, []);
  const date = new Date(detailValyu?.date);
  const dateStr = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  let time = detailValyu?.date.split(' ')[1].slice(0, 5);

  let formatPhoneNumber = (str: any) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return (
        '+' +
        match[1] +
        '' +
        match[2] +
        ' ' +
        match[3] +
        ' ' +
        match[4] +
        ' ' +
        match[5]
      );
    }
    return null;
  };
  const NewPhone = formatPhoneNumber(detailValyu?.phone);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <Text
        style={{
          marginLeft: 15,
          fontSize: 25,
          fontWeight: '700',
          lineHeight: 40,
          marginBottom: 10,
        }}>
        Заказ {detailValyu?.id}
      </Text>
      <ScrollView>
        <ProductOrder productValue={detailValyu?.amount} title="Товаров:" />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'rgba(113, 113, 113, 0.1)',
          }}></View>
        <ProductOrder
          title="На сумму"
          productValue={detailValyu?.price.toLocaleString('ru') + ' сум'}
        />
        <View style={{paddingHorizontal: 15}}>
          <DefaultButton
            title={OrderStatusText[detailValyu?.status]}
            ButtonStyle={{
              backgroundColor: OrderStatusBacgroundColor[detailValyu?.status],
              marginTop: 31,
              marginBotton: 31,
            }}
            TextStyle={{color: COLORS.white}}
          />
        </View>
        <View>
          <ItemView title={dateStr + ' ' + time} value={''} />
          <ItemView title={'Имя'} value={detailValyu?.name} />
          <ItemView title={'Телефон'} value={NewPhone} />
          <ItemView title={'Адрес'} value={detailValyu?.address} />
          <ItemView
            title={'Местоположение карты'}
            value={detailValyu?.map_location}
          />
        </View>
        <FlatList
          data={detailValyu?.orderProducts}
          renderItem={({item}) => (
            <ItemCart
              {...item}
              onClick={toggleModal}
              setIdDetail={setIdDetail}
            />
          )}
          keyExtractor={index => index.id}
        />
        {/* <View style={{paddingHorizontal: 15, paddingBottom: 30}}>
          <DefaultButton
            title="Сделать возврат"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 53,
              marginBotton: 61,
            }}
            TextStyle={{color: '#FFFFFF'}}
          />
        </View> */}
        <ReactNativeModal isVisible={modalOpen} onBackdropPress={toggleModal}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 18}}>
              Оставьте отзыв
            </Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={32}
              onFinishRating={(e: number) => setRate(e)}
              startingValue={rate}
              style={{marginVertical: 27}}
            />
            <DefaultInput
              onChangeText={onStateChange('review')}
              placeholder={STRINGS.ru.sendReview}
              backgroundColor="#FBFBFB"
            />

            <DefaultButton
              title={STRINGS.ru.sendReview}
              ButtonStyle={{backgroundColor: '#84A9C0', marginTop: 30}}
              TextStyle={{color: COLORS.white}}
              onPress={onSendReview}
            />
          </View>
        </ReactNativeModal>
      </ScrollView>
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  modalView: {
    paddingVertical: 37,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    marginBottom: 70,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  itemTextRed: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});
