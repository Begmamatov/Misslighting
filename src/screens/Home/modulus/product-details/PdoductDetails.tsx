import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ProductDetailsButton from '../components/productDetailsButton';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import { COLORS } from '../../../../constants/colors';
import { styles } from './style';
import Description from '../components/Description';
import Characteristics from '../components/Characteristics';
import AllProductItemCard from '../../home/allProducts/AllProductItemCard';
import { ROUTES } from '../../../../constants/routes';
import {
  HeartIconNotActive,
  HeartIconRed,
  LeftArrowIcon,
  StrokeIcon,
} from '../../../../assets/icons/icons';
import requests, { assetUrl } from '@api/requests';
import { useAppSelector } from '@store/hooks';
import { cartSelector } from '@store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { favoriteSelector, loadFavorite } from '@store/slices/favoriteSlice';
import { toggleLoading } from '@store/slices/appSettings';
import FilterModal from '../../../../components/uikit/Filter/FilterModal';
import { ProductItemResponse } from '@api/types';

const PdoductDetails = () => {
  const [active, setActive] = useState({
    value1: false,
    value2: false,
  });
  const onPress = () => {
    setActive({ ...active, value1: !active.value1 });
  };
  const onPress2 = () => {
    setActive({ ...active, value2: !active.value2 });
  };
  const width = Dimensions.get('window').width;
  const isCorusel = useRef(null);
  const [index, setIndex] = useState(0);

  const route = useRoute<any>();
  let id = route.params.props.id;

  const [detailIdValue, setDetailIdValue] = useState<any>([]);
  const getDetailId = async () => {
    try {
      let res = await requests.products.getProductDetailID(id);
      setDetailIdValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();

  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[id];
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[id];

  const onAddFavorite = async () => {
    try {
      dispatch(toggleLoading(true));
      let res = await requests.favorites.addFavorite({
        product_id: id,
      });
      let r = await requests.favorites.getFavorites();
      dispatch(loadFavorite(r.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading(false));
    }
  };
  const [colorValue, seColorValue] = useState<any>([]);
  const ColorHandler = async () => {
    try {
      let res = await requests.products.colorItem();
      seColorValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [colorActive, setColorActive] = useState();

  const [products, setProducts] = useState<ProductItemResponse[]>([]);

  const getProducts = async () => {
    try {
      let res = await requests.sort.getPopular();
      setProducts(res.data.data);
    } catch (error) {
      console.log('product lest', error);
    }
  };
  useEffect(() => {
    getDetailId();
    ColorHandler();
    getProducts();
  }, []);
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ width: '100%', position: 'relative' }}>
          <Carousel
            ref={isCorusel}
            data={detailIdValue.gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ width: '100%', height: 346 }}>
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: assetUrl + item }}
                  />
                </View>
              );
            }}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setIndex(index)}
          />
          <Pagination
            dotsLength={
              detailIdValue.gallery ? detailIdValue.gallery.length : 1
            }
            activeDotIndex={index}
            dotStyle={{
              width: 35,
              height: 3,
              backgroundColor: 'black',
            }}
          />
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrowIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={onAddFavorite} style={styles.icons}>
              {isFav ? (
                <HeartIconRed fill={COLORS.red} />
              ) : (
                <HeartIconNotActive />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.box1_title}>Артикул: 34579</Text>
            <ProductDetailsButton
              title={'Нет в наличии'}
              ButtonStyle={{ width: 146, backgroundColor: 'red' }}
              TextStyle={{ color: 'white', fontSize: 15 }}
            />
          </View>
          <Text style={styles.title}>{detailIdValue.name}</Text>
          <View style={styles.border}></View>
          <View style={styles.box2}>
            <Text style={styles.box2_title_now}>{detailIdValue.price} UZS</Text>
            <Text style={styles.box2_title_old}>
              {detailIdValue.price_usd}сум
            </Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.box3}>
            <Text style={styles.box3_title}>Магазин</Text>
            <ProductDetailsButton
              title={'Название'}
              ButtonStyle={{ width: 146, backgroundColor: '#E6E8E9' }}
              TextStyle={{ color: 'black', fontSize: 15 }}
            />
          </View>
          <View style={styles.border}></View>
          <View style={styles.box4}>
            <Text style={styles.box4_title}>Параметры</Text>
            <View style={styles.box4_content}>
              <Text style={styles.content_title}>Цвет:</Text>
              <FlatList
                style={{ marginTop: 18 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={colorValue}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setColorActive(item.id)}
                    style={[
                      styles.active,
                      {
                        backgroundColor:
                          colorActive === item.id ? '#84A9C0' : '#FFFFFF',
                      },
                    ]}>
                    <Text
                      style={[
                        styles.active_title,
                        {
                          color:
                            colorActive === item.id ? '#ffffff' : '#84A9C0',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.border2}></View>
          <FilterModal title="Валюта" active={active.value1} onPress={onPress}>
            {active.value1 && (
              <View style={[styles.box_noactive]}>
                <Description description={detailIdValue.description} />
              </View>
            )}
          </FilterModal>

          <View style={styles.border2}></View>
          <FilterModal title="Валюта" active={active.value2} onPress={onPress2}>
            {active.value2 && (
              <View style={[styles.box_noactive]}>
                <Characteristics
                  productProperties={detailIdValue.productProperties}
                />
              </View>
            )}
          </FilterModal>

          <View style={styles.border2}></View>
          <View style={styles.box5}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.REVIEWS as never)}>
              <Text style={{ fontSize: 17, fontWeight: '700', lineHeight: 40 }}>
                Оценка и отзывы (2)
              </Text>
            </TouchableOpacity>
            <View>
              <StrokeIcon />
            </View>
          </View>
          <View style={styles.border}></View>
          <View style={styles.box6}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.brend}>Бренд:</Text>
              <Text style={styles.chiaro}> Chiaro</Text>
            </View>
            <View>
              <Image
                style={{ width: 80, height: 30 }}
                source={require('../../../../assets/images/Adius.png')}
              />
            </View>
          </View>
          <View style={styles.border}></View>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 17, color: '#3F3535', fontWeight: '700' }}>
              C этим товаром ищут
            </Text>

            <FlatList
              style={{ marginTop: 20 }}
              showsVerticalScrollIndicator={false}
              data={products}
              renderItem={({ item }) => <AllProductItemCard {...item} />}
              numColumns={2}
            />
          </View>
          <View style={styles.button}>
            <DefaultButton
              title={'Уведомить о наличии'}
              ButtonStyle={{ backgroundColor: '#84A9C0' }}
              TextStyle={{ color: 'white' }}
            />
            <DefaultButton
              title={'Связаться с продавцом'}
              ButtonStyle={{ borderWidth: 1, borderColor: '#84A9C0' }}
              TextStyle={{ color: '#84A9C0' }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PdoductDetails;
