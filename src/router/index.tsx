import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainRouter} from './Main.Router';
import {AuthRouter} from './Auth.Router';

const isAuth = true;

const Router = () => {
  return (
    <NavigationContainer>
      {isAuth ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
