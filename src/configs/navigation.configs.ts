import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {StyleProp, ViewStyle} from 'react-native/types';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  contentStyle: {
    backgroundColor: colors.white,
  },
};

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};

export const tabBarContainerStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: normalize('vertical', 24),
  backgroundColor: colors.white,
};

export const tabBarScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {height: 56},
};
