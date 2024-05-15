import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from '../router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [Routes.authRouter]: {
    isAuth: boolean;
  };
  [Routes.mainRouter]: undefined;
  [Routes.welcome]: undefined;
  [Routes.login]: undefined;
  [Routes.register]: undefined;
  [Routes.verification]: undefined;
  [Routes.paymentMethod]: undefined;
  [Routes.test]: undefined;
  [Routes.home]: undefined;
  [Routes.notification]: undefined;
  [Routes.account]: undefined;
  [Routes.discovery]: undefined;
  [Routes.bookmark]: undefined;
  [Routes.tabNavigator]: undefined;
};
