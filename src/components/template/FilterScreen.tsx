import requests from '@api/requests';
import Slider from '@react-native-community/slider';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import AllProductTitle from '../uikit/AllProductTitle';
import DefaultButton from '../uikit/DefaultButton';
import FilterModal from '../uikit/Filter/FilterModal';
import GoBackHeader from '../uikit/Header/GoBackHeader';

const FilterScren = () => {
  const [active, setActive] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
  });
  const onPress = () => {
    setActive({...active, modal1: !active.modal1});
  };
  const onPress2 = () => {
    setActive({...active, modal2: !active.modal2});
  };
  const onPress3 = () => {
    setActive({...active, modal3: !active.modal3});
  };
  const onPress4 = () => {
    setActive({...active, modal4: !active.modal4});
  };
  const onPress5 = () => {
    setActive({...active, modal5: !active.modal5});
  };
  const onPress6 = () => {
    setActive({...active, modal6: !active.modal6});
  };
  const onPress7 = () => {
    setActive({...active, modal7: !active.modal7});
  };

  const [colorData, setColorData] = useState<any>();
  const [colorActive, setColorActive] = useState();
  const ColorHandler = async () => {
    try {
      let res = await requests.products.colorItem();
      setColorData(res.data.data);
    } catch (error) {
      console.log('================FilterScren====================');
      console.log(error);
      console.log('=================FilterScren===================');
    }
  };
  useEffect(() => {
    ColorHandler();
  }, []);
  const [activeModal, setActiveModal] = useState(true);
  const [activeModal2, setActiveModal2] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title={'Фильтры'} />
      <ScrollView style={styles.container}>
        <View>
          {/* 1 */}
          <FilterModal
            title="Валюта"
            active={active.modal1}
            onPress={onPress}
            activeBorder={true}>
            {active.modal1 && (
              <View style={[styles.box_noactive]}>
                <View style={styles.value}>
                  <Text style={styles.value_title}>Сум</Text>
                  <Text>X</Text>
                </View>
              </View>
            )}
          </FilterModal>
          {/* 2 */}
          <FilterModal
            onPress={onPress2}
            title="Цена"
            active={active.modal2}
            activeBorder={true}>
            {active.modal2 && (
              <View style={[styles.box_noactive]}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={[styles.value, {}]}>
                    <Text style={styles.value_title}>От</Text>
                  </View>
                  <View style={styles.value}>
                    <Text style={styles.value_title}>До</Text>
                  </View>
                </View>
                <View style={{width: '100%', marginTop: 30}}>
                  <Slider
                    style={{width: '100%'}}
                    minimumValue={1}
                    maximumValue={2}
                    minimumTrackTintColor="#84A9C0"
                    maximumTrackTintColor="#000000"
                  />
                </View>
              </View>
            )}
          </FilterModal>
          {/* 3 */}
          <FilterModal
            title="Стиль"
            active={active.modal3}
            onPress={onPress3}
            activeBorder={true}>
            {active.modal3 && (
              <View style={styles.box_noactive}>
                <TouchableOpacity
                  onPress={() => setActiveModal(a => !a)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <View
                    style={[
                      {
                        borderColor: activeModal ? '#84A9C0' : '',
                        borderWidth: activeModal ? 1 : 1,
                      },
                      {
                        width: 22,
                        height: 22,
                        borderStyle: 'solid',
                        borderRadius: 5,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <View
                      style={[
                        {backgroundColor: activeModal ? '#84A9C0' : '#FFFFFF'},
                        {
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                        },
                      ]}></View>
                  </View>
                  <Text style={{marginLeft: 13}}>Нео-классика</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveModal(a => !a)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <View
                    style={[
                      {
                        borderColor: activeModal ? '' : '#84A9C0',
                        borderWidth: activeModal ? 1 : 1,
                      },
                      {
                        width: 22,
                        height: 22,
                        borderStyle: 'solid',
                        borderRadius: 5,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <View
                      style={[
                        {backgroundColor: activeModal ? '#FFFFFF' : '#84A9C0'},
                        {
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                        },
                      ]}></View>
                  </View>
                  <Text style={{marginLeft: 13}}>Минимализм</Text>
                </TouchableOpacity>
              </View>
            )}
          </FilterModal>

          {/* 4 */}
          <FilterModal
            title="Кол-во патронов"
            active={active.modal4}
            onPress={onPress4}
            activeBorder={true}>
            {active.modal4 && (
              <View style={styles.box_noactive}>
                <TouchableOpacity
                  onPress={() => setActiveModal2(a => !a)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <View
                    style={[
                      {
                        borderColor: activeModal2 ? '#84A9C0' : '',
                        borderWidth: activeModal2 ? 1 : 1,
                      },
                      {
                        width: 22,
                        height: 22,
                        borderStyle: 'solid',
                        borderRadius: 5,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <View
                      style={[
                        {backgroundColor: activeModal2 ? '#84A9C0' : '#FFFFFF'},
                        {
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                        },
                      ]}></View>
                  </View>
                  <Text style={{marginLeft: 13}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveModal2(a => !a)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <View
                    style={[
                      {
                        borderColor: activeModal2 ? '' : '#84A9C0',
                        borderWidth: activeModal2 ? 1 : 1,
                      },
                      {
                        width: 22,
                        height: 22,
                        borderStyle: 'solid',
                        borderRadius: 5,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <View
                      style={[
                        {backgroundColor: activeModal2 ? '#FFFFFF' : '#84A9C0'},
                        {
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                        },
                      ]}></View>
                  </View>
                  <Text style={{marginLeft: 13}}>2</Text>
                </TouchableOpacity>
              </View>
            )}
          </FilterModal>

          {/* 5 */}
          <FilterModal
            title="Цвет"
            active={active.modal5}
            onPress={onPress5}
            activeBorder={true}>
            {active.modal5 && (
              <View style={styles.box_noactive}>
                <FlatList
                  style={{marginTop: 18}}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={colorData}
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
            )}
          </FilterModal>
          {/* 6 */}
          <FilterModal
            title="Материал"
            active={active.modal6}
            onPress={onPress6}
            activeBorder={true}>
            {active.modal6 && <View style={styles.box_noactive}></View>}
          </FilterModal>
          {/* 7 */}
          <FilterModal
            title="Температура"
            active={active.modal7}
            onPress={onPress7}
            activeBorder={true}>
            {active.modal7 && <View style={styles.box_noactive}></View>}
          </FilterModal>
        </View>
        <View style={styles.button}>
          <DefaultButton
            title="Показать ( 2 товара )"
            ButtonStyle={{
              backgroundColor: '#84A9C0',
            }}
            TextStyle={{color: '#ffffff', fontSize: 17}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScren;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 14,
  },
  box: {
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#71717119',
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: COLORS.white,
  },
  box1: {position: 'relative'},
  box_active: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 4,
  },
  active: {
    width: 92,
    height: 33,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#84A9C0',
    borderStyle: 'solid',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    paddingHorizontal: 4,
  },
  active_title: {
    fontSize: 16,
    // lineHeight: 40,
    fontWeight: '500',
  },
  box_noactive: {
    width: '100%',
    marginTop: 9,
    zIndex: 3,
    paddingBottom: 24,
  },
  value: {
    flexDirection: 'row',
    width: 163,
    height: 55,
    backgroundColor: '#d1d1d1',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  value_title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7171714f',
  },
  box2: {
    position: 'relative',
    width: '100%',
  },
  VectotIcon: {
    width: 100,
    height: 50,
    borderWidth: 1,
  },
  button: {
    marginTop: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 15,
  },
});
