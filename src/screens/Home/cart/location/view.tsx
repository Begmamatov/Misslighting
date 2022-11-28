import GoBackHeader from '@components/uikit/Header/GoBackHeader';
import {COLORS} from '@constants/colors';
import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {styles} from './style';

const Location = () => {
  return (
    <ScrollView style={styles.container}>
      <GoBackHeader title="Ваш регион" />
      <TextInput
        placeholder="Ваш регион"
        style={styles.input}
        placeholderTextColor={COLORS.gray}
      />
    </ScrollView>
  );
};

export default Location;
