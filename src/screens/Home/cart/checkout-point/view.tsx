import {FilterIcon, GeoIcon, SearchIcon} from '@icons/icons';

import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import {COLORS, GRADIENT_COLORS} from '@constants/colors';
import {STRINGS} from '@locales/strings';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// import MapView from 'react-native-maps';
import {styles} from './style';
// import Geolocation from '@react-native-community/geolocation';
// import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '@constants/routes';

const CheckoutPoint = () => {
  // const mapRef = useRef<MapView>(null);
  // const [userLocation, setUserLocation] = useState<Region>();

  useEffect(() => {
    // if (userLocation) mapRef.current?.animateToRegion(userLocation);
  }, []);

  // let OnMyLocationPress = () => {
  //   Geolocation.getCurrentPosition(e => {
  //     mapRef.current?.animateToRegion({
  //       latitudeDelta: 0.002,
  //       longitudeDelta: 0.002,
  //       ...e.coords,
  //     });
  //   });
  // };

  let navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GoBackHeader title={STRINGS.ru.pickUpPoints} />
      {/* <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}></MapView> */}
      <TouchableOpacity
        style={styles.filter}
        onPress={() => navigation.navigate(ROUTES.FILTER)}>
        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1.2, y: 1}}
          colors={GRADIENT_COLORS}
          style={styles.filterInner}>
          <Text style={{color: COLORS.white}}>Фильтры</Text>
          <FilterIcon fill={COLORS.white} style={styles.filterIcon} />
        </LinearGradient> */}
      </TouchableOpacity>
      <View style={styles.inputBox}>
        <SearchIcon fill={COLORS.red} />
        <TextInput placeholder={'Улица,  метро'} style={styles.input} />
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={OnMyLocationPress}>
        <GeoIcon fill={COLORS.red} />
      </TouchableOpacity> */}
    </View>
  );
};

export default CheckoutPoint;
