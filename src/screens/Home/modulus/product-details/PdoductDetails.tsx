import requests, {assetUrl} from '@api/requests';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '@store/hooks';
import {toggleLoading} from '@store/slices/appSettings';
import {
  cartArraySelector,
  cartSelector,
  loadCart,
} from '@store/slices/cartSlice';
import {favoriteSelector, loadFavorite} from '@store/slices/favoriteSlice';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {LinearGradient, Rect, Stop, Svg} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {
  BasketIcon,
  ChatProductIcon,
  HeartIconActive,
  HeartIconNotActive,
  LeftArrowIcon,
  MinusIcon,
  PlusCounterIcon,
  RightBlackIcon,
} from '../../../../assets/icons/icons';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import FilterModal from '../../../../components/uikit/Filter/FilterModal';
import {COLORS} from '../../../../constants/colors';
import {ROUTES} from '../../../../constants/routes';
import AllProductItemCard from '../../home/allProducts/AllProductItemCard';
import Characteristics from '../components/Characteristics';
import Description from '../components/Description';
import ProductDetailsButton from '../components/productDetailsButton';
import {styles} from './style';
import {STRINGS} from '@locales/strings';
import {selectUser} from '@store/slices/userSlice';

const PdoductDetails = () => {
  const [active, setActive] = useState({
    value1: false,
    value2: false,
  });
  const [colorActive, setColorActive] = useState();
  const [products, setProducts] = useState<any>();
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);
  const width = Dimensions.get('window').width;
  const isCorusel = useRef(null);
  const [index, setIndex] = useState(0);
  const route = useRoute<any>();
  let id = route.params.props.id;
  const cart = useAppSelector(cartSelector);
  let isInCart = !!cart[id];
  const dispatch = useDispatch();
  const fav = useAppSelector(favoriteSelector);
  let isFav = !!fav[id];
  const [adValue, setAdValue] = useState(1);
  const [detailIdValue, setDetailIdValue] = useState<any>([]);
  const [related, setrelated] = useState();
  const userToken = useAppSelector(selectUser);

  const getDetailId = async () => {
    try {
      let res = await requests.products.getProductDetailID(id);
      setDetailIdValue(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onPress = () => {
    setActive({...active, value1: !active.value1});
  };
  const onPress2 = () => {
    setActive({...active, value2: !active.value2});
  };

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
    getProducts();
  }, [id]);

  const adHandler = (a: string) => {
    if (a === 'add') {
      setAdValue(c => c + 1);
    } else {
      if (adValue > 0) {
        setAdValue(c => c - 1);
      } else {
        setAdValue(0);
      }
    }
  };

  const onCartPress = async () => {
    if (isInCart) {
      try {
        setAnimate(true);
        let clear = await requests.products.removeItem({
          product_id: id,
        });
        let cartGet = await requests.products.getCarts();
        dispatch(loadCart(cartGet.data.data));
        setAnimate(false);
      } catch (error) {
        console.log(error);
        setAnimate(false);
      }
    } else {
      try {
        setAnimate(true);
        let res = await requests.products.addToCart({
          amount: adValue,
          product_id: id,
        });
        if (!userToken.token) {
          return Alert.alert(`Oшибка `, 'вы не зарегистрированы', [
            {
              text: 'Ок',
              onPress: () => navigation.navigate(ROUTES.AUTH as never),
            },
          ]);
        }

        if (res.status.toString() === '422') {
          Alert.alert('Кол-во товара на складе меньше чем вы указали');
        }
        let cartRes = await requests.products.getCarts();
        dispatch(loadCart(cartRes.data.data));
        setAnimate(false);
      } catch (error) {
        Alert.alert('Кол-во товара на складе меньше чем вы указали');
      } finally {
        setAnimate(false);
      }
    }
  };

  const relatedProducts = async () => {
    try {
      let res = await requests.products.relatedProducts(id);
      setrelated(res.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    relatedProducts();
  }, []);

  return (
    <View style={{backgroundColor: COLORS.tabBgColor, zIndex: 0}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          zIndex: 2,
          width: '100%',
          height: 100,
        }}>
        <Svg
          height="100"
          width="100%"
          viewBox={`0 0 ${width} 100`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'transparent',
          }}>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="#000000" stopOpacity="0.84" />
            <Stop offset="100%" stopColor="#000000" stopOpacity="0.00" />
          </LinearGradient>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          {detailIdValue?.shop && userToken.token ? (
            <TouchableOpacity
              style={styles.chatIcon}
              onPress={() =>
                navigation.navigate(
                  //@ts-ignore
                  ROUTES.CHATPRODUCTS as never,
                  {id: detailIdValue?.shop?.id} as never,
                )
              }>
              <ChatProductIcon />
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity onPress={onAddFavorite} style={[styles.icons]}>
            {isFav ? <HeartIconActive /> : <HeartIconNotActive />}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{zIndex: 0}}>
        <View style={{width: '100%', position: 'relative', minHeight: 346}}>
          <Carousel
            ref={isCorusel}
            data={detailIdValue?.gallery}
            renderItem={({item}) => {
              return (
                <View style={{width: '100%', height: 346}}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{uri: assetUrl + item}}
                  />
                </View>
              );
            }}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setIndex(index)}
            keyExtractor={(_, index) => index.toString()}
          />
          <Pagination
            dotsLength={
              detailIdValue?.gallery ? detailIdValue?.gallery?.length : 1
            }
            activeDotIndex={index}
            dotStyle={{
              width: 35,
              height: 3,
              backgroundColor: 'black',
            }}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.box1_title}>{detailIdValue?.id}</Text>
            {detailIdValue?.status === 0 ? (
              <ProductDetailsButton
                title={'Нет в наличии'}
                ButtonStyle={{width: 146, backgroundColor: 'red'}}
                TextStyle={{color: 'white', fontSize: 15}}
              />
            ) : null}
            {detailIdValue?.status === 1 ? (
              <ProductDetailsButton
                title={'В наличии'}
                ButtonStyle={{width: 146, backgroundColor: '#35A42B'}}
                TextStyle={{color: 'white', fontSize: 15}}
              />
            ) : null}
            {detailIdValue?.status === 2 ? (
              <ProductDetailsButton
                title={'Под заказ'}
                ButtonStyle={{width: 146, backgroundColor: '#729EDB'}}
                TextStyle={{color: 'white', fontSize: 15}}
              />
            ) : null}
          </View>
          <View style={styles.box2}>
            <Text style={styles.title}>
              {detailIdValue?.name?.length > 10
                ? detailIdValue?.name.slice(0, 10) + '...'
                : detailIdValue?.name}
            </Text>
            <Text style={styles.box2_title_now}>
              {detailIdValue?.price} UZS
            </Text>
          </View>

          <View style={styles.border}></View>
          <View style={styles.counter}>
            <View style={styles.add_remov}>
              <TouchableOpacity onPress={() => adHandler('remov')}>
                <View style={styles.minus}>
                  <MinusIcon
                    style={{width: 120, height: 120}}
                    fill={COLORS.white}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.topBottom}>
                <Text style={{color: COLORS.black}}>{adValue}</Text>
              </View>
              <TouchableOpacity onPress={() => adHandler('add')}>
                <View style={styles.plus}>
                  <PlusCounterIcon
                    style={{width: 120, height: 120}}
                    fill={COLORS.white}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {backgroundColor: isInCart ? '#84A9C0' : '#FFFFFF'},
                ]}
                onPress={onCartPress}>
                {animate ? (
                  <ActivityIndicator
                    size="small"
                    color={isInCart ? '#fff' : '#84A9C0'}
                    animating={animate}
                  />
                ) : (
                  <View style={styles.buttonContainer}>
                    <Text
                      style={[
                        isInCart ? styles.cartText : styles.inactiveCartText,
                      ]}>
                      {isInCart
                        ? `${STRINGS.ru.addToCart}е`
                        : `${STRINGS.ru.addToCart}у`}
                    </Text>
                    <BasketIcon fill={isInCart ? COLORS.white : '#84A9C0'} />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.border}></View>
          <View style={styles.box3}>
            <Text style={styles.box3_title}>Магазин</Text>
            {detailIdValue?.shop?.name ? (
              <ProductDetailsButton
                title={detailIdValue?.shop?.name}
                ButtonStyle={{
                  backgroundColor: '#E6E8E9',
                  paddingHorizontal: 10,
                }}
                TextStyle={{color: 'black', fontSize: 15}}
              />
            ) : null}
          </View>
          {detailIdValue?.productColors?.length > 0 ? (
            <>
              <View style={styles.border}></View>
              <View style={styles.box4}>
                <Text style={styles.box4_title}>Параметры</Text>
                <View style={styles.box4_content}>
                  <Text style={styles.content_title}>Цвет:</Text>
                  <FlatList
                    style={{marginTop: 18}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={detailIdValue?.productColors}
                    renderItem={({item}) => (
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
            </>
          ) : null}
          {detailIdValue?.description ? (
            <>
              <View style={styles.border2}></View>
              <FilterModal
                title="Описание"
                active={active.value1}
                onPress={onPress}>
                {active.value1 && (
                  <View style={[styles.box_noactive]}>
                    <Description description={detailIdValue?.description} />
                  </View>
                )}
              </FilterModal>
            </>
          ) : null}
          {detailIdValue?.productProperties?.length > 0 && (
            <>
              <View style={styles.border2}></View>
              <FilterModal
                title="Характеристики"
                active={active.value2}
                onPress={onPress2}>
                {active.value2 && (
                  <View style={[styles.box_noactive]}>
                    <Characteristics
                      productProperties={detailIdValue?.productProperties}
                    />
                  </View>
                )}
              </FilterModal>
            </>
          )}

          <View style={styles.border2}></View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                //@ts-ignore
                ROUTES.REVIEWS as never,
                detailIdValue as never,
              )
            }
            style={styles.box5}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                lineHeight: 40,
                color: '#3F3535',
              }}>
              Оценка и отзывы
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={18}
                ratingColor="#edcf21"
                ratingBackgroundColor="#FFFFFF"
                readonly={true}
                startingValue={detailIdValue?.rating}
                style={{marginRight: 20}}
              />
              <View style={{marginRight: 12}}>
                <RightBlackIcon />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.border}></View>
          <View style={styles.box6}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.brend}>Бренд:</Text>
              <Text style={styles.chiaro}> {detailIdValue?.brand?.name}</Text>
            </View>
            <View>
              <Image
                style={{width: 30, height: 30, alignSelf: 'center'}}
                source={{uri: assetUrl + detailIdValue?.brand?.photo}}
              />
            </View>
          </View>
          <View style={styles.border}></View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 17,
                color: '#3F3535',
                fontWeight: '700',
                paddingLeft: 15,
              }}>
              C этим товаром ищут
            </Text>
            <FlatList
              style={{marginTop: 20}}
              showsVerticalScrollIndicator={false}
              data={related}
              renderItem={({item}) => <AllProductItemCard {...item} />}
              numColumns={2}
              contentContainerStyle={styles.contentContainerStyle}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PdoductDetails;
