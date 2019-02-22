import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { AuthScreen } from '../screens/AuthScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Auth = createStackNavigator(
  {
    Auth: AuthScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(Auth);
