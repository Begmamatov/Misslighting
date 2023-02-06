import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';
import SingUpTemplate from '../../../components/template/SingUpTemplate';
import SectionTitle from '../../../components/uikit/SectionTitle';
import {COLORS} from '../../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ROUTES} from '@constants/routes';
import SignUpLegal from './SignUpLegal';
import SignUpPhysical from './SignUpPhysical';

const Tab = createMaterialTopTabNavigator();

type Props = {
  navigation: any;
  state: any;
  descriptors: any;
  position: any;
  setHeight: any;
};

function MyTabBar({
  state,
  descriptors,
  navigation,
  position,
  setHeight,
}: Props) {
  return (
    <View style={{flexDirection: 'row', ...styles.buttonsBox}}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            setHeight(route.name === 'signupphysical' ? 600 : 1300);

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                height: 55,
                borderRadius: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 25,
                backgroundColor: isFocused
                  ? COLORS.activeButtonBgColor
                  : COLORS.noActiveButtonBgColor2,
                width: '50%',
              }}>
              <Animated.Text
                style={{
                  color: isFocused
                    ? COLORS.white
                    : COLORS.noActiveButtonTextColor,
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

export default function SingUpScreen() {
  const [height, setHeight] = React.useState(600);

  return (
    <SingUpTemplate>
      <SectionTitle title="Регистрация" marginBottom={36} />
      <View style={{width: '100%', height: height, backgroundColor: '#fff'}}>
        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} setHeight={setHeight} />}
          sceneContainerStyle={{backgroundColor: '#fff'}}>
          <Tab.Screen
            name={ROUTES.SIGNUPPHYSCIAL}
            component={SignUpPhysical}
            options={{
              tabBarLabel: 'Физическое лицо',
            }}
          />
          <Tab.Screen
            name={ROUTES.SIGNUPLEGAL}
            component={SignUpLegal}
            options={{
              tabBarLabel: 'Юридическое лицо',
            }}
          />
        </Tab.Navigator>
      </View>
    </SingUpTemplate>
  );
}

const styles = StyleSheet.create({
  buttonsBox: {
    width: '100%',
    backgroundColor: COLORS.noActiveButtonBgColor2,
    borderRadius: 45,
    height: 55,
    marginBottom: 30,
  },
});
