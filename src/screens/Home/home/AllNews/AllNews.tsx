import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AllShopItemCard from './AllNewsCard';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import SortAndFilter from '../../../../components/uikit/SortAndFilter';
import {COLORS} from '../../../../constants/colors';
import {useRoute} from '@react-navigation/native';
import requests from '@api/requests';
import {ProductItemResponse} from '@api/types';
import SortView from '@components/uikit/Sort/SortView';
import FilterScren from '@components/template/FilterScreen';
import AllNewsCart from './AllNewsCard';

const AllNews = () => {
  const {params, name, key, id, type}: any = useRoute();
  const [products, setProducts] = useState<ProductItemResponse[]>();

  let getPopular = async () => {
    try {
      let res = await requests.sort.getPopular();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={params.props.title} />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={params.products}
          renderItem={({item, index}) => (
            <AllNewsCart buttonTitle="Подробнее" item={item} key={index} />
          )}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tabBgColor,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  render_container: {
    position: 'relative',
    width: '100%',
    marginTop: 29,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  container2: {marginBottom: 0},

  contentContainerStyle: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modal: {
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: COLORS.white,
  },

  modalText: {
    fontSize: 16,
    marginVertical: 15,
    color: COLORS.defaultBlack,
  },

  empty: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
