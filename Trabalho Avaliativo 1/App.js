import React, { Component } from 'react';
import { Text, Button, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/Home';
import PaoDeQueijo from './src/PaoDeQueijo';
import PetitGateau from './src/PetitGateau';

const Project = createStackNavigator(
  {
    Home,
    PaoDeQueijo,
    PetitGateau,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#373737' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '',
    },
  }
);

const App = createAppContainer(Project);
export default () => (
  <>
    <StatusBar barStyle="light-content" />
    <App />
  </>
);
