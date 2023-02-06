import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AllProductItemCard from './AllProductItemCard';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import AllProductTitle from '../../../../components/uikit/AllProductTitle';
import SortAndFilter from '../../../../components/uikit/SortAndFilter';
import {COLORS} from '../../../../constants/colors';
import {useRoute} from '@react-navigation/native';
import requests from '@api/requests';
import {ProductItemResponse} from '@api/types';
import SortView from '@components/uikit/Sort/SortView';
import FilterScren from '@components/template/FilterScreen';
const AllProducts = () => {
  const {params, name, key, id, type}: any = useRoute();
  const [products, setProducts] = useState<ProductItemResponse[]>();

  let getRecently = async () => {
    try {
      let res = await requests.sort.getRecently();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  let getNewAdded = async () => {
    try {
      let res = await requests.sort.getNewAdded();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  let getExpensive = async () => {
    try {
      let res = await requests.sort.getExpensive();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  let getCheap = async () => {
    try {
      let res = await requests.sort.getCheap();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  let getPopular = async () => {
    try {
      let res = await requests.sort.getPopular();
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalFilter, setModalFilter] = useState('');
  const [modalSort, setModalSort] = useState('');

  useEffect(() => {
    if (modalSort === 'Новинка') {
      getNewAdded();
    }
    if (modalSort === 'Самые дорогие') {
      getExpensive();
    }
    if (modalSort === 'Популярные') {
      getPopular();
    }
    if (modalSort === 'Самые дешевые') {
      getCheap();
    }
    if (modalSort === 'Недавно добавленные') {
      getRecently();
    }
  }, [modalSort]);
  const defaultTitle = modalSort ? modalSort : params.props?.title;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <GoBackHeader />
          <AllProductTitle title={defaultTitle} />
          {params.props.filter ? (
            <SortAndFilter
              setModalVisible={setModalVisible}
              setModalFilter={setModalFilter}
              setModalSort={modalSort}
            />
          ) : null}
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={products ? products : params.products}
          renderItem={({item}) => (
            <AllProductItemCard
              showNewProduct={params.props.showNewProduct}
              showDiscountAdd={params.props.showDiscountAdd}
              modalSort={modalSort}
              {...item}
            />
          )}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {modalFilter === 'Сортировать' ? (
          <SortView
            setModalVisible={setModalVisible}
            setModalSort={setModalSort}
            modalSort={modalSort}
          />
        ) : (
          <FilterScren setModalVisible={setModalVisible} />
        )}
      </Modal>
    </SafeAreaView>
  );
};

export default AllProducts;

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
