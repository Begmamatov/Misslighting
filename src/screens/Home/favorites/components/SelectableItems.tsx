import Text from '@components/uikit/Text';
import {COLORS} from '@constants/colors';
import {BottomArrow} from '@icons/icons';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export interface SelectableItemsProps {
  onPress?: (event: GestureResponderEvent) => void;
  headerText?: string;
}

const SelectableItems = ({onPress, headerText}: SelectableItemsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{headerText ? headerText : ''}</Text>
        <BottomArrow fill={COLORS.red} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectableItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(113, 113, 113, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.red,
    marginRight: 6,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
