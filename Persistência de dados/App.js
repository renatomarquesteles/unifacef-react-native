import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Formulario from './src/Formulario';
import Lista from './src/Lista';

const Projeto = createStackNavigator({
  Lista,
  Formulario,
});

export default createAppContainer(Projeto);
