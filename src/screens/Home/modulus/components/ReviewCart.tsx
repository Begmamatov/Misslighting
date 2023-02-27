import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {StrokeIcon} from '@icons/icons';
import {assetUrl} from '@api/requests';
import {Rating} from 'react-native-ratings';
import {COLORS} from '@constants/colors';

const ReviewCart = ({item}: any) => {
  // console.log('ReviewCart', JSON.stringify(item, null, 2));
  const {date, user, bought, review, rate, id} = item;

  return (
    <View style={styles.box}>
      <View style={styles.top_img}>
        <View style={styles.userImage}>
          <Image
            source={{uri: assetUrl + user.photo}}
            style={{
              width: 57,
              height: 57,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              marginTop: 10,
              color: COLORS.defaultBlack,
              marginBottom: 2,
            }}>
            {user.name.length > 10
              ? user?.name.slice(0, 10) + '...'
              : user?.name}
          </Text>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={16}
            ratingColor="#edcf21"
            ratingBackgroundColor="#FFFFFF"
            readonly={true}
            startingValue={rate}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 40,
              color: '#C8C8C8',
            }}>
            {date}
          </Text>
        </View>
      </View>
      <View style={styles.bottom_doc}>
        <Text
          style={{
            color: '#C8C8C8',
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 20,
          }}>
          {review}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCart;

const styles = StyleSheet.create({
  userInfo: {
    marginLeft: -20,
  },

  top_img: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  userImage: {
    width: 57,
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 40,
    color: '#3F3535',
    marginBottom: 29,
  },

  img_container: {
    width: 95,
    height: 91,
    borderRadius: 15,
    marginLeft: 11,
  },
  img_doc: {
    flexDirection: 'row',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: '#fff',
    shadowOffset: {width: -1, height: 1},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 100,
    marginVertical: 7,
    paddingVertical: 22,
    paddingHorizontal: 11,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 15,
    maxWidth: '100%',
  },
  bottom_doc: {
    marginTop: 21,
    width: '100%',
  },
});
