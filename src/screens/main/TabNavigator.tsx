/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import DiscoveryScreen from './Discovery.Screen';
import BookmarkScreen from './Bookmark.Screen';
import NotificationScreen from './Notification.Screen';
import AccountScreen from './Account.Screen';
import {SvgImage} from 'components/SvgImage';
import {colors} from 'theme/colors';
import {HomeScreen} from './Home.Screen';
import {
  tabBarContainerStyle,
  tabBarScreenOptions,
} from 'configs/navigation.configs';
import {normalize} from 'theme/metrics';

const Tab = createBottomTabNavigator<NavigationParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={tabBarContainerStyle}
      screenOptions={tabBarScreenOptions}>
      <Tab.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
              width={24}
              height={24}
              color={focused ? colors.primary.base : colors.sky.dark}
              source={require('../../assets/vectors/home.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.discovery}
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
              width={normalize('vertical', 24)}
              height={24}
              color={focused ? colors.primary.base : colors.sky.dark}
              source={require('../../assets/vectors/search.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.bookmark}
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
              width={24}
              height={24}
              color={focused ? colors.primary.base : colors.sky.dark}
              source={require('../../assets/vectors/heart.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.notification}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
              width={24}
              height={24}
              color={focused ? colors.primary.base : colors.sky.dark}
              source={require('../../assets/vectors/bell.svg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgImage
              width={24}
              height={24}
              color={focused ? colors.primary.base : colors.sky.dark}
              source={require('../../assets/vectors/menu.svg')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
