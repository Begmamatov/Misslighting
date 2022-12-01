import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import ProductCatalog from './ProductCatalog';
import ProductListPopular from './ProductListPopular';
import ProductListSale from './ProductListSale';
import ProductListNew from './ProductListNew';
import ProductListTopShop from './ProductListTopShop';

import ShopListPopular from './ShopListPopular';
import NewsList from './NewsList';
import SearchNatlifHeader from '../../../components/uikit/Header/SearchNatlifHeader';
import {COLORS} from '../../../constants/colors';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation, useRoute} from '@react-navigation/native';
import requests from '@api/requests';

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  const item_width = Math.round(width * 1);
  const isCorusel = useRef(null);
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const route = useRoute();
  const [dataSlider, setDataSlider] = useState<any>([]);

  const CatalogArray = [
    {
      title: 'Black shadow',
      id: 1,
      img_url: require('../../../assets/images/carusel.png'),
    },
    {
      title: 'Black shadow',
      id: 2,
      img_url: require('../../../assets/images/carusel.png'),
    },
    {
      title: 'Black shadow',
      id: 3,
      img_url: require('../../../assets/images/carusel.png'),
    },
    {
      title: 'Black shadow',
      id: 4,
      img_url: require('../../../assets/images/carusel.png'),
    },
  ];
  const CatalogArray2 = [
    {
      title: 'Black shadow',
      id: 1,
      img_url: require('../../../assets/images/BannerTop.png'),
    },
    {
      title: 'Black shadow',
      id: 2,
      img_url: require('../../../assets/images/BannerTop.png'),
    },
    {
      title: 'Black shadow',
      id: 3,
      img_url: require('../../../assets/images/BannerTop.png'),
    },
    {
      title: 'Black shadow',
      id: 4,
      img_url: require('../../../assets/images/BannerTop.png'),
    },
  ];

  const CaruselHandler = async () => {
    try {
      let res = await requests.slider.getSliders();
      setDataSlider(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CaruselHandler();
  }, []);
  console.log('================dataSlider====================');
  console.log(JSON.stringify(dataSlider, null, 2));
  console.log('================dataSlider====================');
  return (
    <ScrollView style={styles.scroll}>
      <View>
        <Carousel
          ref={isCorusel}
          data={CatalogArray2}
          renderItem={({item}) => {
            return (
              <View style={{width: '100%', height: 116}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={item.img_url}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex2(index)}
        />
        <Pagination
          dotsLength={CatalogArray.length}
          activeDotIndex={index2}
          dotStyle={{
            width: 35,
            height: 3,
            backgroundColor: 'black',
          }}
        />
        <Carousel
          ref={isCorusel}
          data={CatalogArray}
          renderItem={({item}) => {
            return (
              <View style={{width: '100%', height: 245}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={item.img_url}
                />
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={CatalogArray.length}
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
        <ProductListPopular title={'Популярные товары'} />
        <ProductCatalog />
        <ProductListSale title={'Товары со скидкой'} showDiscount={true} />
        <ProductListNew title={'Новые товары'} showNewProduct={true} />
        <ProductListTopShop showDiscountAdd={true} title="Товары под заказ" />
        <ShopListPopular title="Популярные магазины" />
        <NewsList title="Новости" />
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
