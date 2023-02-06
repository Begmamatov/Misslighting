import requests, {assetUrl} from '@api/requests';
import FilterModal from '@components/uikit/Filter/FilterModal';
import {COLORS} from '@constants/colors';
import {LeftArrowIcon} from '@icons/icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Svg, {LinearGradient, Rect, Stop} from 'react-native-svg';
import Description from '../components/Description';
import {useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const NewDetails = () => {
  const {params} = useRoute<any>();
  let id = params.id;
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
  const [active, setActive] = useState({
    value1: false,
    value2: false,
  });
  const onPress = () => {
    setActive({...active, value1: !active.value1});
  };

  const [shopValyu, setShopValyu] = useState<any>([]);
  const shopGetId = async () => {
    try {
      let res = await requests.news.getNewsDetails(id);
      setShopValyu(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    shopGetId();
  }, []);
  const source = {
    html: `
 ${shopValyu.description}`,
  };

  return (
    <View style={{backgroundColor: COLORS.tabBgColor, zIndex: 0, flex: 1}}>
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
        </View>
      </View>
      <ScrollView style={{backgroundColor: COLORS.white, flex: 1}}>
        <View style={{width: '100%', height: 346}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: assetUrl + shopValyu.photo}}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{shopValyu.name}</Text>
          <RenderHTML contentWidth={width} source={source} />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewDetails;

const styles = StyleSheet.create({
  goBack: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 0,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    zIndex: 4,
  },
  icons: {
    width: 50,
    height: 44,
    backgroundColor: '#84A9C0',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginBottom: 50,
    backgroundColor: COLORS.white,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#3F3535',
    lineHeight: 40,
    marginLeft: 15,
  },
  box2: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box2_title_now: {
    fontSize: 16,
    lineHeight: 40,
    color: '#131313',
  },
  box2_title_old: {
    fontSize: 18,
    lineHeight: 40,
    color: '#C8C8C8',
  },
  border: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#7171712d',
    marginTop: 14,
    marginBottom: 14,
  },
  box_noactive: {
    width: '100%',
    zIndex: 3,
    paddingBottom: 24,
  },
  border2: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#7171712d',
  },
});
