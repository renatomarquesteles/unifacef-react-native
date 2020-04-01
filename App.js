import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';

import PostIt from './src/components/PostIt';
import Produto from './src/components/Produto';
import Aluno from './src/components/Aluno';
import styles from './src/styles/globalStyle';

export default class MeuApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PostIt titulo="Estudar" data="11/03/2020" texto="Estudar React Native" />
        <PostIt titulo="Academia" data="12/03/2020" texto="Treino de costas e bíceps" />

        <Produto descricao="Iphone X" quantidade="3" preco="1000" />

        <Aluno nome="Renato" n1={8} n2={6} faltas={10} />
      </View>
    );
  }
}
