import {
  OrderStatusColor,
  OrderStatusText,
} from '@constants/OrderStatusColorAndText';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ROUTES} from '../../../../../../constants/routes';

const ProductCartActive = ({item}: any) => {
  const navigation = useNavigation();

  const date = new Date(item.date);
  const dateStr = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  const isActive = Object.keys(OrderStatusText).some(i => i == item.status);

  if (!isActive) return <View />;
  return (
    <View style={styles.itemProduct}>
      <View style={styles.itemHeader}>
        <View>
          <Text style={styles.itemTextBold}>Заказ {item.id}</Text>
          <Text style={styles.itemText}>{dateStr}</Text>
        </View>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
          }}>
          <Text
            style={[
              styles.itemTextRed,
              {color: OrderStatusColor[item.status]},
            ]}>
            {OrderStatusText[item.status]}
          </Text>
        </View>
      </View>
      {item.orderProducts?.map((item1: any, index: number) => {
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
                {item1.amount.length > 0 ? (
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
                      {item1.amount}x
                    </Text>
                  </View>
                ) : null}
                {item1.product?.name ? (
                  <Text style={styles.itemTextBold}>{item1.product?.name}</Text>
                ) : (
                  <Text style={styles.itemTextBold}></Text>
                )}
              </View>
            </View>
            <View style={styles.text_price}>
              <Text style={{color: '#000', fontSize: 15, fontWeight: '400'}}>
                {item1.price.toLocaleString('ru')} сум
              </Text>
            </View>
            {item1.id ? <Text style={styles.itemText}>{item1.id}</Text> : null}
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
            {item.price.toLocaleString('ru')} сум
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

export default ProductCartActive;

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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
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
  text_price: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
