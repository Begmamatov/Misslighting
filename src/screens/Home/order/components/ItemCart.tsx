import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type cartType = {
  title?: string;
  img_url?: string;
  value1?: string;
  value2?: string;
};

const ItemCart = (props: cartType) => {
  return (
    <View style={styles.container}>
      <View style={styles.imge_box}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 15}}
          source={require('../../../../assets/images/img1.png')}
        />
      </View>
      <View style={styles.Doc_box}>
        <Text style={{fontSize: 21, fontWeight: '600', lineHeight: 40}}>
          KR77
        </Text>
        <View>
          <Text style={{color: '#C8C8C8', fontSize: 13, fontWeight: '400'}}>
            Артикул: 33255
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '400',
              lineHeight: 30,
            }}>
            3.600.000 сум
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 10,
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',

    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 18,
    marginHorizontal: 15,
    marginTop: 39,
  },
  imge_box: {
    width: 91,
    height: 92,
    borderRadius: 15,
  },
  Doc_box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 17,
  },
});
