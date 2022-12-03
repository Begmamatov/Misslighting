import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '../../../constants/colors';
import ProductOrder from './components/ProductOrder';
import DefaultButton from '../../../components/uikit/DefaultButton';
import ItemView from './components/ItemView';
import ItemCart from './components/ItemCart';
import {ROUTES} from '../../../constants/routes';
import DefaultInput from '@components/uikit/TextInput';
import {STRINGS} from '@locales/strings';
import {Rating} from 'react-native-ratings';
import ReactNativeModal from 'react-native-modal';
import requests from '@api/requests';
import {SendReviewProps} from '@api/types';

export type Order = {
  title?: string;
  goods?: number;
  item?: any;
};
const data = [
  {
    title: '10.14.2022. 17:00',
    value: '',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
  {
    title: 'Получатель:',
    value: 'Ройтман Рафаэль Евгеньевич',
  },
];

const OrderView = (props: Order) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const navigation = useNavigation();
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  let id = 38;
  const [detailIdValue, setDetailIdValue] = useState<any>([]);

  const getDetailId = async () => {
    try {
      let res = await requests.products.getProductDetailID(id);
      setDetailIdValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [review, setReview] = useState<SendReviewProps>({
    product_id: id,
    rate: 0,
    review: '',
  });

  let onStateChange = (key: string) => (value: string) => {
    setReview(e => ({...e, [key]: value}));
  };
  const onSendReview = async () => {
    try {
      let res = await requests.products.sendReview({
        rate: review.rate,
        review: review.review,
        product_id: review.product_id,
      });

      setTimeout(() => {
        setReview({product_id: props.item.id, rate: 0, review: ''});
        setModalOpen(false);
      }, 700);
    } catch (error) {
      console.log(error);
    }
  };

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
        Заказ 118
      </Text>
      <ScrollView>
        <ProductOrder productValue="2" title="Товаров:" />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'rgba(113, 113, 113, 0.1)',
          }}></View>
        <ProductOrder title="На сумму" productValue="7.200.000 сум" />
        <View style={{paddingHorizontal: 15}}>
          <DefaultButton
            title="Завершен"
            ButtonStyle={{
              backgroundColor: 'rgba(113, 113, 113, 0.13)',
              marginTop: 31,
              marginBotton: 31,
            }}
          />
        </View>

        <View>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <ItemView title={item.title} value={item.value} />
            )}
          />
        </View>
        <ItemCart />
        <View style={{paddingHorizontal: 15, paddingBottom: 30}}>
          <DefaultButton
            title="Сделать возврат"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 53,
              marginBotton: 61,
            }}
            TextStyle={{color: '#FFFFFF'}}
            onPress={toggleModal}
          />
        </View>
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
});
