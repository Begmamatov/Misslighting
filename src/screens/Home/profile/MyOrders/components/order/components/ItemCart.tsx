import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {assetUrl} from '@api/requests';
import {COLORS} from '@constants/colors';
import {Rating} from 'react-native-ratings';
type PropsType = {
  product?: any;
  onClick?: any;
  rating?: any;
  setIdDetail?: any;
  id?: number;
};
const ItemCart = (props: PropsType) => {
  const onClickMeHandler = () => {
    props.setIdDetail(props.id);
    props.onClick();
  };

  return (
    <TouchableWithoutFeedback onPress={onClickMeHandler}>
      <View style={styles.container}>
        <View style={styles.imge_box}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 15}}
            source={{uri: assetUrl + props.product?.photo}}
          />
        </View>
        <View style={styles.Doc_box}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.black,
            }}>
            {props.product?.name.length > 15
              ? props?.product?.name.slice(0, 15) + '...'
              : props?.product?.name}
          </Text>
          <View>
            <Text style={{color: '#C8C8C8', fontSize: 13, fontWeight: '400'}}>
              Артикул:{props.product?.id}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 30,
                color: COLORS.black,
              }}>
              {props.product?.price.toLocaleString('ru')}сум
            </Text>
          </View>
        </View>
        <View style={styles.rating_content}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={15}
            ratingColor="#edcf21"
            ratingBackgroundColor="#FFFFFF"
            readonly={true}
            startingValue={props?.rating}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: 20,
    elevation: 5,
    position: 'relative',
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
    width: '40%',
  },
  rating_content: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
