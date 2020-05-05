import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Inicio from './src/Inicio';
import Menu from './src/Menu';

const Projeto = createStackNavigator(
  {
    Inicio,
    Menu,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(Projeto);
