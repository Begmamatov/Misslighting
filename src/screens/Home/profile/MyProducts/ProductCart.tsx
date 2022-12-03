import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../../constants/routes';
import {useNavigation} from '@react-navigation/native';
type typesProps = {
  name?: string;
  photo?: string;
  shopName?: string;
  price?: number;
  item?: any;
};
const ProductCart = (props: typesProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemProduct}>
      <View style={styles.itemHeader}>
        <View>
          <Text style={styles.itemTextBold}>Заказ 118</Text>
          <Text style={styles.itemText}>10.14.2022</Text>
        </View>
        <View>
          <Text style={styles.itemTextRed}>Ожидает оплату</Text>
        </View>
      </View>
      <View style={styles.itemHeader2}>
        <View>
          <Text style={styles.itemTextBold}>{props.item.name}</Text>
          <Text style={styles.itemText}>{props.item.shopName}</Text>
        </View>
        <View>
          <Text>{props.item.price}</Text>
        </View>
      </View>

      <View style={styles.itemFooter}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.itemTextBold}>Итого: </Text>
          <Text></Text>
        </View>
        <TouchableOpacity
          style={styles.btnMore}
          onPress={() => navigation.navigate(ROUTES.ORDERVIEW as never)}>
          <Text style={{color: '#fff', fontWeight: '600'}}>Детали</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCart;

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
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    color: '#C8C8C8',
    paddingTop: 5,
  },
  itemTextRed: {
    color: 'red',
    fontSize: 14,
  },
});
