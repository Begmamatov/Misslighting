import {COLORS} from '@constants/colors';
import {CartIconActive, HeartIconActive} from '@icons/icons';
import {ParamListBase, TabNavigationState} from '@react-navigation/native';

import * as React from 'react';

import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
} from 'react-native';

interface Tab {
  name: () => JSX.Element;
}

interface StaticTabbarProps {
  tabs: Tab[];
  value: Animated.Value;
  navigate: (index: number) => void;
  state: TabNavigationState<ParamListBase>;
  total: any;
  favs: any;
}

export const tabHeight = 64;
const {width} = Dimensions.get('window');

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
  values: Animated.Value[] = [];

  constructor(props: StaticTabbarProps) {
    super(props);
    const {tabs} = this.props;
    this.values = tabs.map(
      (tabs, index) => new Animated.Value(index === 0 ? 1 : 0),
    );
  }

  componentDidUpdate() {
    this.onPress(this.props.state.index);
  }

  componentDidMount() {
    this.onPress(this.props.state.index);
  }

  onPress = (index: number) => {
    const {value, tabs} = this.props;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      ...this.values.map(value =>
        Animated.timing(value, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ),
      Animated.parallel([
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(value, {
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };
  render() {
    const {tabs, value, favs, total} = this.props;
    const tabWidth = width / tabs.length;

    return (
      <View style={styles.container}>
        {tabs.map(({name: Icon}, key) => {
          const activeValue = this.values[key];
          const opacity = value.interpolate({
            inputRange: [
              -width + tabWidth * (key - 1),
              -width + tabWidth * key,
              -width + tabWidth * (key + 1),
            ],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp',
          });
          const translateY = activeValue.interpolate({
            inputRange: [0, 1],
            outputRange: [tabHeight, -38],
          });
          return (
            <React.Fragment {...{key}}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigate(key)}>
                <Animated.View style={[styles.tab, {opacity}]}>
                  <Icon />
                  {favs?.length > 0 ? (
                    Icon === HeartIconActive ? (
                      <View style={styles.length}>
                        <Text style={styles.length_text}>{favs?.length}</Text>
                      </View>
                    ) : null
                  ) : null}

                  {total?.count > 0 ? (
                    Icon === CartIconActive ? (
                      <View style={styles.length}>
                        <Text style={styles.length_text}>{total?.count}</Text>
                      </View>
                    ) : null
                  ) : null}
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: 'absolute',
                  top: 0,
                  width: tabWidth,
                  left: tabWidth * key,
                  height: tabHeight,
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: [{translateY}],
                }}>
                <View style={styles.circle}>
                  <View style={styles.circleBox}>
                    <Icon />
                  </View>
                </View>
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: tabHeight,
    top: 0,
    position: 'relative',
  },
  circle: {
    width: 56,
    borderWidth: 3,
    borderColor: '#84A9C0',
    height: 56,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  circleBox: {
    width: '95%',
    borderWidth: 3,
    borderColor: '#84A9C0',
    height: '95%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84A9C0',
  },
  length: {
    position: 'absolute',
    minWidth: 19,
    minHeight: 18,
    padding: 1,
    top: 10,
    right: 15,
    backgroundColor: '#FF9500',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  length_text: {
    position: 'absolute',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 12,
  },
});
