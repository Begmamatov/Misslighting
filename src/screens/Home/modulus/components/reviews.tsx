import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GoBackHeader from '../../../../components/uikit/Header/GoBackHeader';
import {COLORS} from '../../../../constants/colors';
import {StrokeIcon} from '../../../../assets/icons/icons';
const dada = [1, 2, 3, 4];
const Reviews = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <GoBackHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Оценка и отзывы</Text>
        <View>
          <View style={styles.box_content}>
            <View style={styles.img_container}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../../../assets/images/1212.png')}
              />
            </View>
            <View style={styles.img_doc}>
              <Text style={{fontSize: 17, fontWeight: '600', lineHeight: 40}}>
                A55 MORENA
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 11,
                }}>
                <Text style={{marginLeft: 48, marginRight: 10}}>4</Text>
                <StrokeIcon />
              </View>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dada}
            style={{height: '72%'}}
            keyExtractor={(_, index: any) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.box}>
                <View style={styles.top_img}>
                  <View style={styles.userImage}>
                    <Image
                      source={require('../../../../assets/images/Ellipse87.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 50,
                      }}
                    />
                  </View>
                  <View style={styles.userInfo}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        lineHeight: 40,
                        marginTop: 9,
                      }}>
                      Рафаэль
                    </Text>
                    <StrokeIcon />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 20,
                        color: '#C8C8C8',
                      }}>
                      10.14.2022. 17:00
                    </Text>
                  </View>
                </View>
                <View style={styles.bottom_doc}>
                  <Text
                    style={{
                      color: '#C8C8C8',
                      fontWeight: '500',
                      fontSize: 15,
                      lineHeight: 20,
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '96%',
    paddingHorizontal: 15,
  },
  userInfo: {
    marginLeft: -20,
  },

  top_img: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 57,
    height: 57,
    borderRadius: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 40,
    color: '#3F3535',
    marginBottom: 29,
  },

  box_content: {
    display: 'flex',
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // paddingBottom: 18,
    marginBottom: 18,
  },
  img_container: {
    width: 95,
    height: 91,
    borderRadius: 15,
    marginLeft: 11,
  },
  img_doc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: '#fff',
    shadowOffset: {width: -1, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '100%',
    minHeight: 100,
    marginTop: 11,
    paddingVertical: 22,
    paddingHorizontal: 11,
  },
  bottom_doc: {
    marginTop: 21,
    width: '100%',
  },
});
