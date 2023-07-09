import {COLORS} from '@constants/colors';
import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: COLORS.white,
    fontSize: 14,
  },
  primaryText: {
    color: COLORS.black,
  },
});
