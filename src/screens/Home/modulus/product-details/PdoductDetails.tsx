import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ProductDetailsButton from '../components/productDetailsButton';
import DefaultButton from '../../../../components/uikit/DefaultButton';
import {COLORS} from '../../../../constants/colors';
import {styles} from './style';
import Description from '../components/Description';
import Characteristics from '../components/Characteristics';
import AllProductItemCard from '../../home/allProducts/AllProductItemCard';
import {ROUTES} from '../../../../constants/routes';
import {
  HeartIconNotActive,
  LeftArrowIcon,
  StrokeIcon,
} from '../../../../assets/icons/icons';
const CatalogArray = [
  {
    title: 'Black shadow',
    id: 1,
    img_url: require('../../../../assets/images/carusel.png'),
  },
  {
    title: 'Black shadow',
    id: 2,
    img_url: require('../../../../assets/images/carusel.png'),
  },
  {
    title: 'Black shadow',
    id: 3,
    img_url: require('../../../../assets/images/carusel.png'),
  },
  {
    title: 'Black shadow',
    id: 4,
    img_url: require('../../../../assets/images/carusel.png'),
  },
];
const product = [1, 2, 3, 4];

const PdoductDetails = () => {
  const width = Dimensions.get('window').width;
  const item_width = Math.round(width * 1);
  const isCorusel = useRef(null);
  const [index, setIndex] = useState(0);
  const route = useRoute();

  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{width: '100%', position: 'relative'}}>
        <Carousel
          ref={isCorusel}
          data={CatalogArray}
          renderItem={({item}) => {
            return (
              <View style={{width: '100%', height: 356}}>
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
        <View style={styles.goBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <View style={styles.icons}>
            <HeartIconNotActive />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.box1_title}>Артикул: 34579</Text>
          <ProductDetailsButton
            title={'Нет в наличии'}
            ButtonStyle={{width: 146, backgroundColor: 'red'}}
            TextStyle={{color: 'white', fontSize: 15}}
          />
        </View>
        <Text style={styles.title}>A55 MORENA</Text>
        <View style={styles.border}></View>
        <View style={styles.box2}>
          <Text style={styles.box2_title_now}>3.600.000 UZS</Text>
          <Text style={styles.box2_title_old}>4.500.000 сум</Text>
        </View>
        <View style={styles.border}></View>
        <View style={styles.box3}>
          <Text style={styles.box3_title}>Магазин</Text>
          <ProductDetailsButton
            title={'Название'}
            ButtonStyle={{width: 146, backgroundColor: '#E6E8E9'}}
            TextStyle={{color: 'black', fontSize: 15}}
          />
        </View>
        <View style={styles.border}></View>
        <View style={styles.box4}>
          <Text style={styles.box4_title}>Параметры</Text>
          <View style={styles.box4_content}>
            <Text style={styles.content_title}>Цвет:</Text>
            <View style={styles.colors}>
              <View style={styles.active}>
                <Text style={styles.active_title}>Черный</Text>
              </View>
              <View style={styles.active}>
                <Text style={styles.active_title}>Черный</Text>
              </View>
              <View style={styles.active}>
                <Text style={styles.active_title}>Черный</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.border}></View>
        <Description />
        <View style={styles.border}></View>
        <Characteristics />
        <View style={styles.border}></View>
        <View style={styles.box5}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REVIEWS as never)}>
            <Text style={{fontSize: 17, fontWeight: '700', lineHeight: 40}}>
              Оценка и отзывы (2)
            </Text>
          </TouchableOpacity>
          <View>
            <StrokeIcon />
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={styles.box6}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.brend}>Бренд:</Text>
            <Text style={styles.chiaro}> Chiaro</Text>
          </View>
          <View>
            <Image
              style={{width: 80, height: 30}}
              source={require('../../../../assets/images/Adius.png')}
            />
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <Text style={{fontSize: 17, color: '#3F3535', fontWeight: '700'}}>
            C этим товаром ищут
          </Text>
          <View style={styles.render_container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={product}
              renderItem={() => <AllProductItemCard />}
              numColumns={2}
              contentContainerStyle={{
                alignItems: 'center',
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <DefaultButton
            title={'Уведомить о наличии'}
            ButtonStyle={{backgroundColor: '#84A9C0'}}
            TextStyle={{color: 'white'}}
          />
          <DefaultButton
            title={'Связаться с продавцом'}
            ButtonStyle={{borderWidth: 1, borderColor: '#84A9C0'}}
            TextStyle={{color: '#84A9C0'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PdoductDetails;
