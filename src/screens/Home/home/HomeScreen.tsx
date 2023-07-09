import requests, {assetUrl} from '@api/requests';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SearchNatlifHeader from '../../../components/uikit/Header/SearchNatlifHeader';
import {COLORS} from '../../../constants/colors';
import NewsList from './NewsList';
import ProductCatalog from './ProductCatalog';
import ProductListNew from './ProductListNew';
import ProductListPopular from './ProductListPopular';
import ProductListSale from './ProductListSale';
import ShopListPopular from './ShopListPopular';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  const item_width = Math.round(width * 1);
  const isCorusel = useRef(null);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const route = useRoute();
  const [dataSliderAll, setDataSliderAll] = useState<any>([]);
  const [dataSliderMobile, setDataSliderMobile] = useState<any>([]);
  const [bannerSlider, setBannerSlider] = useState<any>([]);

  const CaruselHandler = async () => {
    try {
      let res = await requests.slider.getSlidersMobile();
      setDataSliderMobile(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const CaruselSliderAll = async () => {
    try {
      let res = await requests.slider.getSlidersAll();
      setDataSliderAll(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const CaruselBannerAll = async () => {
    try {
      let res = await requests.slider.getBannerSliderAll();
      setBannerSlider(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CaruselHandler();
    CaruselSliderAll();
    CaruselBannerAll();
  }, []);

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View>
        <Carousel
          ref={isCorusel}
          data={bannerSlider}
          renderItem={({item}: any) => {
            return (
              <View style={{width: '100%', height: 116}}>
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                  source={{uri: assetUrl + item.photo}}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex2(index)}
          key={bannerSlider.id}
        />
        <Pagination
          dotsLength={bannerSlider?.length}
          activeDotIndex={index2}
          dotStyle={{
            width: 35,
            height: 3,
            backgroundColor: 'black',
          }}
        />
        <Carousel
          ref={isCorusel}
          data={dataSliderAll}
          renderItem={({item}: any) => {
            return (
              <View style={{width: '100%', height: 245}}>
                <Image
                  style={{width: '100%', height: 245, resizeMode: 'cover'}}
                  source={{uri: assetUrl + item.photo}}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex(index)}
          key={dataSliderAll.id}
        />
        <Pagination
          dotsLength={dataSliderAll.length}
          activeDotIndex={index}
          dotStyle={{
            width: 35,
            height: 3,
            backgroundColor: 'black',
          }}
        />
      </View>
      <View style={styles.container}>
        <SearchNatlifHeader />
        <ProductListPopular title={'Популярные товары'} filter={true} />
        <ProductCatalog />
        <ProductListSale title={'Товары со скидкой'} filter={true} />
        <Carousel
          ref={isCorusel}
          data={bannerSlider}
          renderItem={({item}: any) => {
            return (
              <View style={{width: '100%', height: 116}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: assetUrl + item.photo}}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex2(index)}
          key={bannerSlider.id}
        />
        <Pagination
          dotsLength={dataSliderAll.length}
          activeDotIndex={index2}
          dotStyle={{
            width: 35,
            height: 3,
            backgroundColor: 'black',
          }}
        />
        <ProductListNew
          title={'Новые товары'}
          filter={true}
          showNewProduct={true}
        />
        {/* <ProductListTopShop title="Товары под заказ" filter={true} /> */}
        <ShopListPopular title="магазины" filter={true} />
        <NewsList title="Новости" filter={false} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: COLORS.tabBgColor,
  },
  container: {
    flex: 1,
  },
  imageBannerTop: {
    width: '100%',
    height: 116,
    marginBottom: 10,
  },
  caruselBadge: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 40,
  },
  caruselBadgeItem: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#84A9C0',
    marginHorizontal: 5,
  },
  imageBannerBattom: {
    width: '100%',
    height: 245,
    marginBottom: 10,
  },
});
