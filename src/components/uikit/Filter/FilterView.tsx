import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/colors';
import GoBackHeader from '../Header/GoBackHeader';
import AllProductTitle from '../AllProductTitle';

const FilterView = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title={'Фильтры'} />
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Валюта</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box_noactive}>
            <View style={styles.value}>
              <Text style={styles.value_title}>Сум</Text>
              <Text>X</Text>
            </View>
          </View>
        </View>
        {/* 2 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Цена</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
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
            <View style={{}}></View>
          </View>
        </View>
        {/* 3 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Стиль</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box_noactive}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderColor: '#84A9C0',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#84A9C0',
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                  }}></View>
              </View>
              <Text style={{marginLeft: 13}}>Нео-классика</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderColor: '#84A9C0',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#84A9C0',
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                  }}></View>
              </View>
              <Text style={{marginLeft: 13}}>Минимализм</Text>
            </View>
          </View>
        </View>
        {/* 4 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Кол-во патронов</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box_noactive}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderColor: '#84A9C0',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#84A9C0',
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                  }}></View>
              </View>
              <Text style={{marginLeft: 13}}>1</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderColor: '#84A9C0',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 5,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#84A9C0',
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                  }}></View>
              </View>
              <Text style={{marginLeft: 13}}>2</Text>
            </View>
          </View>
        </View>
        {/* 5 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Цвет</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 6 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Материал</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 7 */}
        <View style={styles.box}>
          <View style={styles.box_active}>
            <Text style={styles.active_title}>Температура</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterView;

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
    zIndex: 5,
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
  active_title: {
    fontSize: 16,
    lineHeight: 40,
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
    backgroundColor: '#FAFAFA',
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
});
