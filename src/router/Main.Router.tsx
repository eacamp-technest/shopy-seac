import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabNavigator} from 'screens/main/TabNavigator';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from './routes';
import {PopularProductsScreen} from 'screens/main/PopularProduct.Screen';
import {ItemListScreen} from 'screens/main/ItemList.Screen';
import {FilterScreen} from 'screens/main/Filter.Screen';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.tabNavigator}>
      <MainStack.Screen name={Routes.tabNavigator} component={TabNavigator} />
      <MainStack.Screen
        name={Routes.popularProducts}
        component={PopularProductsScreen}
      />
      <MainStack.Screen name={Routes.itemList} component={ItemListScreen} />
      <MainStack.Screen name={Routes.filter} component={FilterScreen} />
    </MainStack.Navigator>
  );
};
