import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabNavigator} from 'screens/main/TabNavigator';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from './routes';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.tabNavigator}>
      <MainStack.Screen name={Routes.tabNavigator} component={TabNavigator} />
    </MainStack.Navigator>
  );
};
