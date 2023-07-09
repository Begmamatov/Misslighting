import requests from '@api/requests';
import DefaultButton from '@components/uikit/DefaultButton';
import {COLORS} from '@constants/colors';
import {ROUTES} from '@constants/routes';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OrderModal = ({orderValyu, onClose}: any) => {
  let order_id = orderValyu?.id;
  const [octoValyu, setOctoValyu] = useState<any>();
  const orderSendHandler = async () => {
    try {
      let res = await requests.order.octoSendOrder(order_id);
      setOctoValyu(res.data);
      console.log('res', res.data);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  useEffect(() => {
    orderSendHandler();
  }, [order_id]);
  const navigation = useNavigation();

  let url = octoValyu?.octo_pay_url;
  const OnsedLinkgin = () => {
    onClose();
    navigation.navigate(ROUTES.WebView as never, url as never);
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        width: '90%',
        height: 200,
        borderRadius: 10,
        paddingTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{textAlign: 'center', marginBottom: 30, color: COLORS.black}}>
        Нажмите чтобы оплатить оплату
      </Text>
      <View style={{width: '80%'}}>
        <DefaultButton
          title={'оплатить оплату'}
          ButtonStyle={{backgroundColor: '#ff9500'}}
          TextStyle={{color: COLORS.white}}
          onPress={OnsedLinkgin}
        />
      </View>
    </View>
  );
};

export default OrderModal;

const styles = StyleSheet.create({});
