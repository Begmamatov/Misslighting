import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useContext} from 'react';
import {View, TouchableOpacity, ViewStyle, StyleProp, Text} from 'react-native';

import {styles} from './CameraHeader.styles';
import LocalizationContext from '@constants/LocalizationContext';

interface CameraHeaderProps {
  goBack?: () => void;
  isRight?: boolean;
  rightBtnPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CameraHeader: FC<CameraHeaderProps> = ({
  isRight = false,
  rightBtnPress,
  style = {},
  goBack,
}) => {
  const navigation = useNavigation();

  const {t} = useContext(LocalizationContext);

  const goBackHandler = useCallback(() => {
    if (goBack) return goBack();

    return navigation.goBack();
  }, [navigation, goBack]);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={goBackHandler}>
        <Text style={styles.text}>{t('::TakePicture:GoBack')}</Text>
      </TouchableOpacity>

      {isRight && (
        <TouchableOpacity onPress={rightBtnPress}>
          <Text style={[styles.text, styles.primaryText]}>
            {t('::TakePicture:UsePicture')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CameraHeader;
