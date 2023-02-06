import {COLORS} from '@constants/colors';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 30,
  },

  backHeader: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  deliveryContainer: {
    marginHorizontal: 20,
  },

  headerTxt: {
    fontSize: 16,
    color: '#757575',
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 40,
  },

  activeBox: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#84A9C0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 22,
  },

  box: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingHorizontal: 12,
    paddingVertical: 22,
  },

  border: {
    borderWidth: 1,
    borderColor: COLORS.whiteGray,
    width: 26,
    height: 26,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeBorder: {
    borderWidth: 1,
    borderColor: '#84A9C0',
    width: 26,
    height: 26,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },

  activeDot: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#84A9C0',
  },

  textBox: {
    marginHorizontal: 10,
  },

  text: {
    fontSize: 16,
    color: COLORS.defaultBlack,
  },

  comment: {
    fontSize: 12,
    color: '#C8C8C8',
    lineHeight: 40,
  },
  pickupContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },

  pickupHeaderTxt: {
    color: COLORS.defaultBlack,
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  button: {
    marginVertical: 10,
    backgroundColor: COLORS.menuBackground,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonTxt: {
    fontSize: 16,
    color: COLORS.red,
  },

  pickupBox: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  boxTxt: {
    fontSize: 13,
    color: '#C8C8C8',
  },

  boxImage: {
    borderRadius: 8,
    width: 80,
    height: 80,
    marginTop: 5,
  },

  boxNum: {
    zIndex: 2,
    margin: 5,
    flexDirection: 'row',
  },

  imageNum: {
    zIndex: 1,
    marginLeft: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lighBlue,
  },

  num: {
    fontSize: 12,
    color: COLORS.white,
  },

  recipientContainer: {
    marginHorizontal: 20,
    paddingBottom: 20,
  },

  recipHeaderTxt: {
    fontSize: 19,
    color: COLORS.defaultBlack,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  recipBox: {
    padding: 15,
    borderRadius: 8,
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginVertical: 20,
    backgroundColor: COLORS.white,
  },

  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  notMe: {
    fontSize: 14,
    color: '#C8C8C8',
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'android' ? 10 : 15,
    backgroundColor: COLORS.lightGray,
    borderColor: COLORS.whiteGray,
    color: COLORS.defaultBlack,
    fontSize: 16,
  },

  underline: {
    marginTop: 10,
    color: '#84A9C0',
    marginBottom: 10,
  },

  recipButton: {
    marginHorizontal: 0,
    marginBottom: 40,
  },
  adButton: {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  many: {
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 45,
    paddingHorizontal: 20,
    paddingVertical: 17,
    backgroundColor: '#FAFAFA',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  noActive: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  boActive_box: {
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  modal_container: {
    position: 'relative',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  checkoutBox: {
    paddingHorizontal: 10,
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
  btn_item: {
    width: '48%',
  },
  box_item: {
    width: '100%',
  },

  map: {
    marginHorizontal: 20,
    borderWidth: 10,
  },
});
