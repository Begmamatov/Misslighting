import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import requests, {assetUrl} from '@api/requests';
import {useRoute} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import ReviewCart from './ReviewCart';
import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import {COLORS} from '@constants/colors';

const Reviews = () => {
  const {params}: any = useRoute();
  const [reviewsList, setReviewsList] = useState();
  const getReviews = async () => {
    try {
      let res = await requests.products.getReviews(params?.id);
      setReviewsList(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log('Reviews', JSON.stringify(reviewsList, null, 2));
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Оценка и отзывы</Text>
        <View>
          <View style={styles.box_content}>
            <View style={styles.img_container}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 15}}
                source={{uri: assetUrl + params.photo}}
              />
            </View>
            <View style={styles.img_doc}>
              <Text style={{fontSize: 17, fontWeight: '600', lineHeight: 40}}>
                {params.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 11,
                }}>
                <Text style={{marginLeft: 48, marginRight: 10}}>
                  {params.rating}
                </Text>
                <Rating
                  type="custom"
                  ratingCount={1}
                  imageSize={18}
                  ratingColor="#edcf21"
                  ratingBackgroundColor="#FFFFFF"
                  readonly={true}
                  startingValue={params?.rating}
                />
              </View>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={reviewsList}
            style={{height: '72%', paddingHorizontal: 1}}
            keyExtractor={(index: any) => index.id}
            renderItem={({item}) => <ReviewCart item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '96%',
    paddingHorizontal: 15,
  },
  userInfo: {
    marginLeft: -20,
  },

  top_img: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 57,
    height: 57,
    borderRadius: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 40,
    color: '#3F3535',
    marginBottom: 29,
  },

  box_content: {
    display: 'flex',
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // paddingBottom: 18,
    marginBottom: 18,
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
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '100%',
    minHeight: 100,
    marginTop: 11,
    paddingVertical: 22,
    paddingHorizontal: 11,
  },
  bottom_doc: {
    marginTop: 21,
    width: '100%',
  },
});
