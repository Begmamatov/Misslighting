import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {StrokeIcon} from '../../assets/icons/icons';
import DefaultButton from './DefaultButton';

const MakeRefund = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 20, zIndex: 3}}>
        <View style={styles.box}>
          <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 18}}>
            Оставьте отзыв
          </Text>
          <View style={styles.star}>
            <StrokeIcon />
          </View>
          <View style={styles.textArea}>
            <Text style={{marginTop: 21, marginLeft: 21}}>
              Ваш комментарий...
            </Text>
          </View>
          <View style={{width: '100%', paddingHorizontal: 10}}>
            <DefaultButton
              title="Отправить"
              ButtonStyle={{
                backgroundColor: '#84A9C0',
                marginTop: 53,
                marginBotton: 61,
              }}
              TextStyle={{color: '#FFFFFF'}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.3,
          zIndex: 1,
        }}></View>
    </View>
  );
};

export default MakeRefund;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: COLORS.white,
    zIndex: 2,
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingVertical: 37,
    flexDirection: 'column',
    alignItems: 'center',
  },
  star: {
    marginTop: 27,
  },
  textArea: {
    marginTop: 36,
    width: 301,
    height: 168,
    backgroundColor: '#FBFBFB',
  },
});
