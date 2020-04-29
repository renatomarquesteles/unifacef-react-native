import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Componente1 from './src/Componente1';
import Componente2 from './src/Componente2';
import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const Project = createStackNavigator(
  {
    Componente1,
    Componente2,
    Tela1,
    Tela2,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#FF0022' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: 'Voltar',
    },
  }
);
export default createAppContainer(Project);
