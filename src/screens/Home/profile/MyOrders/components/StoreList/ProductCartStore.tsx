import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../../../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import {
  OrderStatusColor,
  OrderStatusText,
  OrderStatusTextNoActive,
} from '@constants/OrderStatusColorAndText';

const ProductCartStore = ({item}: any) => {
  const navigation = useNavigation();

  const date = new Date(item.date);
  const dateStr = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  const isHistry = Object.keys(OrderStatusTextNoActive).some(
    i => i == item.status,
  );

  if (!isHistry) return <View />;

  return (
    <View style={styles.itemProduct}>
      <View style={styles.itemHeader}>
        <View>
          <Text style={styles.itemTextBold}>Заказ {item.id}</Text>
          <Text style={styles.itemText}>{dateStr}</Text>
        </View>
        <View>
          <Text
            style={[
              styles.itemTextRed,
              {color: OrderStatusColor[item.status]},
            ]}>
            {OrderStatusText[item.status]}
          </Text>
        </View>
      </View>
      {item.orderProducts?.map((item: any, index: number) => {
        return (
          <View style={styles.itemHeader2} key={index}>
            <View style={{width: '70%'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '90%',
                }}>
                <View
                  style={{
                    minWidth: 38,
                    height: 27,
                    backgroundColor: '#84A9C0',
                    borderRadius: 45,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    {item.amount}x
                  </Text>
                </View>
                <Text style={styles.itemTextBold}>
                  {item.product?.name.length > 20
                    ? item.product?.name.slice(0, 20) + '...'
                    : item.product?.name}
                </Text>
              </View>
              {item.product?.shopName ? (
                <Text style={styles.itemText}>{item.product?.shopName}</Text>
              ) : null}
            </View>

            <Text style={{color: '#000', fontSize: 15, fontWeight: '400'}}>
              {item.price} сум{' '}
            </Text>
          </View>
        );
      })}

      <View style={styles.itemFooter}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.itemTextBold}>Итого: </Text>
          <Text style={{fontSize: 16, color: '#3F3535', fontWeight: '600'}}>
            {item.price} сум
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnMore}
          onPress={() =>
            navigation.navigate(
              ROUTES.ORDERVIEW as never,
              {id: item.id} as never,
            )
          }>
          <Text style={{color: '#fff', fontWeight: '600'}}>Детали</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCartStore;

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
    borderRadius: 10,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  itemText: {
    color: '#C8C8C8',
    paddingTop: 5,
    fontSize: 14,
    fontWeight: '400',
  },
  itemTextRed: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});
