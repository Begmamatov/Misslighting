import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import GoBackHeader from '../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '../../../constants/colors';
import ProductOrder from './components/ProductOrder';
import DefaultButton from '../../../components/uikit/DefaultButton';
import ItemView from './components/ItemView';
import ItemCart from './components/ItemCart';
import {ROUTES} from '../../../constants/routes';

export type Order = {
  title?: string;
  goods?: number;
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
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.MAKEREFUND as never);
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
        <View style={{paddingHorizontal: 15}}>
          <DefaultButton
            title="Сделать возврат"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
              marginTop: 53,
              marginBotton: 61,
            }}
            TextStyle={{color: '#FFFFFF'}}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({});
