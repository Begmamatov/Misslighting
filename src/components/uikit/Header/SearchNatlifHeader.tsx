import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  CameraIcon,
  NotificationIcon,
  SearchIcon,
} from '../../../assets/icons/icons';
import {COLORS} from '../../../constants/colors';
import {STRINGS} from '@locales/strings';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants/routes';
interface SearchProps {
  autoFocus?: boolean;
  onChange?: (val: string) => void;
}
export default function SearchNatlifHeader({autoFocus, onChange}: SearchProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.searchInputBox}>
        <TextInput
          style={styles.searchInput}
          placeholder={STRINGS.ru.searching}
          placeholderTextColor={COLORS.whiteGray}
          autoFocus={false}
          autoCorrect={false}
          onChangeText={onChange}
          onPressIn={() => navigation.navigate(ROUTES.SEARCH as never)}
        />
        <SearchIcon fill={'#84A9C0'} style={{marginRight: 10}} />
      </View>
      <View style={styles.NotificationBox}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.PROFILE_NOTIFICATION as never)
          }>
          <NotificationIcon fill={'#84A9C0'} />
        </TouchableOpacity>
        <View style={styles.NotificationBoxBadge}>
          <Text style={styles.NotificationBoxBadgeText}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInputBox: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.tabBgColor,
    height: 50,
    borderRadius: 45,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#84A9C0',
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: COLORS.tabBgColor,
    width: '90%',
    borderRadius: 45,
    height: '100%',
  },
  NotificationBox: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.tabBgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotificationBoxBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.TextActiveColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotificationBoxBadgeText: {
    fontSize: 12,
    color: COLORS.tabBgColor,
  },
});
