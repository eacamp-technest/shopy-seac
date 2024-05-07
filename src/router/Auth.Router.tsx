// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {WelcomeScreen} from '../screens/auth/Welcome.Screen';
// import {LoginScreen} from '../screens/auth/Login.Screen';
// import {RegisterScreen} from '../screens/auth/Register.Screen';
// import {VerificationScreen} from '../screens/auth/Verification.Screen';
// import {PaymentMethodScreen} from '../screens/auth/PaymentMethod.Screen';
// import {Routes} from './routes';
// import {NavigationParamList} from '../types/navigation.types';
// import {Edges, SafeAreaView} from 'react-native-safe-area-context';
// import {CommonStyles} from '../theme/common.styles';
// import {
//   authStackScreenOption,
//   defaultScreenOptions,
// } from 'configs/navigation.configs';

// const AuthStack = createNativeStackNavigator<NavigationParamList>();

// const edges: Edges = {
//   bottom: 'off',
//   top: 'additive',
// };

// export const AuthRouter = () => {
//   return (
//     <SafeAreaView style={CommonStyles.flex} edges={edges}>
//       <AuthStack.Navigator
//         screenOptions={authStackScreenOption}
//         initialRouteName={Routes.welcome}>
//         <AuthStack.Screen
//           name={Routes.welcome}
//           component={WelcomeScreen}
//           options={defaultScreenOptions}
//         />
//         <AuthStack.Screen name={Routes.login} component={LoginScreen} />
//         <AuthStack.Screen name={Routes.register} component={RegisterScreen} />
//         <AuthStack.Screen
//           name={Routes.verification}
//           component={VerificationScreen}
//         />
//         <AuthStack.Screen
//           name={Routes.paymentMethod}
//           component={PaymentMethodScreen}
//         />
//       </AuthStack.Navigator>
//     </SafeAreaView>
//   );
// };
