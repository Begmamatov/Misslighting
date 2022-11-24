import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../Header/GoBackHeader';
import AllProductTitle from '../AllProductTitle';
import {COLORS} from '../../../constants/colors';

type PropsSort = {
  item?: string;
};
const title = 'Сортировать';
const SortView = (props: PropsSort) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <AllProductTitle title={title} />
      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.title}>Популярные</Text>
          <View style={styles.except}>
            <View style={styles.inside}></View>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Новые</Text>
          <View style={styles.except}>
            <View style={styles.inside}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SortView;

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },

  except: {
    width: 29,
    height: 29,
    borderWidth: 1,
    borderColor: '#84A9C0',
    marginBottom: 7,
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inside: {
    width: 22,
    height: 22,
    backgroundColor: '#84A9C0',
    borderRadius: 50,
  },
  title: {
    fontSize: 17,
    lineHeight: 40,
    fontWeight: '500',
    color: '#757575',
  },
});
