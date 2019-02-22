import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AuthScreen } from '../screens/AuthScreen';
import { LoginScreen } from '../screens/LoginScreen';

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
  }
);

export default createAppContainer(AuthStack);
