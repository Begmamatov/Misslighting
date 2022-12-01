import Text from '@components/uikit/Text';
import { COLORS } from '@constants/colors';
import { STRINGS } from '@locales/strings';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import DefaultHeader from './components/DefaultHeader';
import Products from './components/Products';
import ProductsListFav from './components/ProductsListFav';

import { useFavoritesHook } from './hooks';
import { styles } from './style';

const FavoriteView = () => {
  let { favorites, toggleModal, isModalVisible, modalText, getFavs } =
    useFavoritesHook();

  useEffect(() => {
    getFavs();
  }, []);

  if (favorites?.length == 0) {
    return (
      <View style={styles.empty}>
        <DefaultHeader name={STRINGS.ru.favorites} />
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>{STRINGS.ru.favoritesIsEmpty}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DefaultHeader name={STRINGS.ru.favorites} />
      <ScrollView style={styles.container}>
        {/* <SelectableMenu /> */}
        {/* <SelectableItems onPress={toggleModal} headerText={modalText} /> */}
        <View style={{ paddingHorizontal: 15 }}>
          {favorites?.map((item, index) => (
            <Products item={item} key={index} />
          ))}
        </View>

        <Text style={styles.text}>{STRINGS.ru.advertBlock}</Text>
        <ProductsListFav />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteView;
