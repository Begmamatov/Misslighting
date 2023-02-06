import requests from '@api/requests';
import LoadingModal from '@components/uikit/LoadingModal/LoadingModal';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SearchNatlifHeader from '../../../components/uikit/Header/SearchNatlifHeader';
import {COLORS} from '../../../constants/colors';
import CatalogListItem from './CatalogListItem';

export default function CatalogScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  let effect = async () => {
    try {
      setLoading(true);
      let res = await requests.categories.getCategories();
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    effect();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingModal />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                width: '100%',
                backgroundColor: COLORS.tabBgColor,
              }}>
              <SearchNatlifHeader />
            </View>
          }
          stickyHeaderIndices={[0]}
          data={categories}
          renderItem={props => <CatalogListItem {...props} />}
          keyExtractor={(item: any) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tabBgColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  columnWrapperStyle: {
    // justifyContent: 'space-between',
    marginBottom: 15,
  },
});
