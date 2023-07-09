import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {BottomArrow, NewTopArrowIcon2} from '@icons/icons';
import {COLORS} from '@constants/colors';
import {useSelector} from 'react-redux';
import requests from '@api/requests';
import DefaultButton from '@components/uikit/DefaultButton';
const dataOrderType = [
  {
    id: 1,
    name: 'Самовывоз',
    value: 'pickup',
  },
  {
    id: 2,
    name: 'Доставка курьером',
    value: 'delivery',
  },
];
const data = [
  {
    id: 1,
    name: 'Узбекистан',
    value: 'pickup',
  },
];
const data2 = [{id: 1, name: 'Выберите', value: ''}];

const CheckoutModal = (props: any) => {
  const [subRegions, setSubRegions] = useState<any>();
  const [subCategories, setSubCategories] = useState<any>();
  const [sortLists, setSortLists] = useState<any>();
  const [logist, setLogist] = useState(null);
  const [logistId2, setLogistId2] = useState(null);
  const [logistId, setLogistId] = useState(null);
  const [logist2, setLogist2] = useState(null);
  const [delivery2, setDelivery2] = useState();
  const [delivery, setDelivery] = useState();
  const [cartList, setCartList] = useState<any>();

  const getRegions = async () => {
    try {
      let res = await requests.categories.getRegions();
      setSubRegions(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCategories = async (e: number) => {
    console.log(e);
    try {
      let res = await requests.categories.getSubCategories(e);
      setSubCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getLogistSort = async (e: any) => {
    try {
      let res = await requests.categories.getLogistSort(e);
      setSortLists(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [filter, setFilter] = useState({
    region_id: 0,
    unit_id: 38,
    amount: cartList?.length,
  });
  const onRegionsHandler = async (e: any) => {
    let newFilter = {
      ...filter,
      region_id: e,
    };

    setFilter(newFilter);
    await getSubCategories(e);
  };
  const onCategoryHandler = (e: any) => {
    let newFilter = {
      ...filter,
      unit_id: 38,
      region_id: e,
    };
    setFilter(newFilter);
    getLogistSort(newFilter);
  };

  const cartListHandler = async () => {
    try {
      let res = await requests.products.getCarts();
      setCartList(res.data.data);
    } catch (error) {}
  };

  let id = props.orderValyu;

  const SubmetHandler = () => {
    setDelivery2(delivery);
    props.setModalShow(false);
    setLogist2(logist);
    setLogistId2(logistId);
  };
  const closedHandler = () => {
    props.setModalShow(false);
    setFilter({
      ...filter,
      amount: cartList?.length,
      region_id: 0,
      unit_id: 38,
    });
    getLogistSort('');
    setDelivery2(delivery);
  };
  useEffect(() => {
    getRegions();
    cartListHandler();
    // getLogistiCart();
  }, []);
  console.log('Viloyatlar', JSON.stringify(id, null, 2));
  const region_name = subCategories?.find((obj: {id: number}) => {
    return obj.id === Number(filter?.region_id);
  });
  const [coordinate, setCoordinate] = useState('');
  const [address, setAddress] = useState();

  return (
    <View style={styles.checkoutBox}>
      <View style={styles.box_item}>
        <Text style={{padding: 0, margin: 0}}></Text>
        <SelectDropdown
          data={data as any}
          onSelect={(selectedItem: any) => {}}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: '#3F3535',
            fontSize: 16,
            textAlign: 'left',
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={'#000000'} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: '#3F3535',
            fontSize: 16,
          }}
          defaultButtonText="Узбекистан"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={{padding: 0, margin: 0}}>Выберите город</Text>
        <SelectDropdown
          data={subRegions ? subRegions : (dataOrderType as any)}
          onSelect={(selectedItem: any) => {
            onRegionsHandler(selectedItem.id);
          }}
          buttonTextAfterSelection={(selectedItem: any, index: any) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: '#3F3535',
            fontSize: 16,
            textAlign: 'left',
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={'#000000'} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: '#3F3535',
            fontSize: 16,
          }}
          defaultButtonText="Выберите"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={{padding: 0, margin: 0}}>Выберите район</Text>
        <SelectDropdown
          data={subCategories?.length > 0 ? subCategories : (data2 as any)}
          onSelect={(category_id: any) => {
            onCategoryHandler(category_id.id);
          }}
          buttonTextAfterSelection={(category_id: any, index: any) => {
            return category_id.name;
          }}
          rowTextForSelection={(item: any, index: any) => {
            return item.name;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={{
            color: '#3F3535',
            fontSize: 16,
            textAlign: 'left',
          }}
          renderDropdownIcon={() => {
            return <BottomArrow fill={'#000000'} />;
          }}
          dropdownIconPosition="right"
          rowTextStyle={{
            color: '#3F3535',
            fontSize: 16,
          }}
          defaultButtonText="Выберите"
        />
      </View>
      <View style={styles.box_item}>
        <Text style={{padding: 0, margin: 0}}>Напишите адрес</Text>
        <View style={styles.dropdown2BtnStyleInput}>
          <TextInput
            placeholder="Напишите адрес"
            style={styles.input}
            onChangeText={props.onStateChange('address')}
          />
        </View>
      </View>
      <View style={styles.box_item}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <View style={styles.btn_item}>
          <DefaultButton
            title="Сохранить"
            ButtonStyle={{backgroundColor: '#ff9500'}}
            TextStyle={{color: COLORS.white}}
            onPress={SubmetHandler}
          />
        </View>
        <View style={styles.btn_item}>
          <DefaultButton
            title="Отменить"
            onPress={closedHandler}
            ButtonStyle={{backgroundColor: '#ff9500'}}
            TextStyle={{color: COLORS.white}}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default CheckoutModal;

export const styles = StyleSheet.create({
  modal_container: {
    position: 'relative',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  checkoutBox: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  dropdown2BtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 45,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
    marginTop: 15,
    marginBottom: 15,
  },
  dropdown2BtnStyleInput: {
    width: '100%',
    height: 50,
    borderRadius: 45,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn_item: {
    width: '48%',
  },
  box_item: {
    width: '100%',
  },
  input: {
    width: '90%',
    color: COLORS.black,
  },
});
