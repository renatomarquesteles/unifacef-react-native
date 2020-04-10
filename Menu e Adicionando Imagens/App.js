import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Aluno from './src/components/Aluno';
import Curso from './src/components/Curso';

export default createDrawerNavigator({
  Aluno,
  Curso,
});
