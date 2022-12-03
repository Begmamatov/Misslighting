import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexWrap: 'wrap',
  },

  list: {
    marginHorizontal: 15,
  },
  container2: {marginBottom: 15},
  contentContainerStyle: {flexDirection: 'column', alignItems: 'center'},
});
