import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Lista from './src/Lista';

const App = createStackNavigator({ Lista });

export default createAppContainer(App);
