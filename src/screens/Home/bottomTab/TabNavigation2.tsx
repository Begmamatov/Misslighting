import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as shape from 'd3-shape';
import * as React from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';
import {
  CartIconActive,
  CatalogIconActive,
  HeartIconActive,
  HomeIconActive,
  ProfileIconActive,
} from '../../../assets/icons/icons';
import StaticTabbar, {tabHeight as height} from './StaticTabbar';
import {useSelector} from 'react-redux';
import {favoriteArraySelector} from '@store/slices/favoriteSlice';
import {cartTotalSelector} from '@store/slices/cartSlice';

let AnimatedSvg = Animated.createAnimatedComponent(Svg);
const tabs = [
  {name: HomeIconActive},
  {name: HeartIconActive},
  {name: CatalogIconActive},
  {name: CartIconActive},

  {name: ProfileIconActive},
];
const {width: Width} = Dimensions.get('window');
const tabWidth = Width / tabs.length;

//@ts-ignore
const left = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: 0, y: 0},
  {x: Width, y: 0},
]);
//@ts-ignore
const tab = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
  {x: Width - 15, y: 0},
  {x: Width, y: 0},
  {x: Width + 10, y: 10},
  {x: Width + 25, y: height / 2},
  {x: Width + tabWidth - 25, y: height / 2},
  {x: Width + tabWidth - 10, y: 10},
  {x: Width + tabWidth, y: 0},
  {x: Width + tabWidth + 15, y: 0},
]);

//@ts-ignore
const right = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: Width + tabWidth, y: 0},
  {x: Width * 2.5, y: 0},
  {x: Width * 2.5, y: height},
  {x: 0, y: height},
  {x: 0 * 2, y: 0},
]);
const d = `${left} ${tab} ${right}`;

interface TabbarProps {}

const {width} = Dimensions.get('window');

let Tabbar = ({state, navigation, descriptors}: BottomTabBarProps) => {
  const [translateX, setValue] = React.useState(
    new Animated.Value(-width + tabWidth * state.index),
  );
  let onNavigate = (i: number) => {
    navigation.navigate(state.routes[i].name);
  };
  let favs = useSelector(favoriteArraySelector);
  let total = useSelector(cartTotalSelector);
  return (
    <>
      <View {...{width: Width, height}} style={{backgroundColor: 'white'}}>
        <AnimatedSvg
          width={Width * 2.5}
          style={{transform: [{translateX}], overflow: 'hidden'}}
          {...{height}}>
          <Path {...{d}} fill="#84A9C0" />
        </AnimatedSvg>
        <LinearGradient
          style={{
            position: 'relative',
            right: 0,
            left: 0,
            top: -104,
            height: 40,
            transform: [{rotate: '180deg'}],
          }}
          colors={['white', '#ffffff00']}
        />
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar
            state={state}
            value={translateX}
            {...{tabs}}
            navigate={onNavigate}
            favs={favs}
            total={total}
          />
        </View>
      </View>
      <SafeAreaView style={styles.safeArea} />
    </>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#84A9C0',
  },
});
