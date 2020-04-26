import React, {Component} from 'react';
import {View} from 'react-native';
import Postit from './src/Postit';
import Produto from './src/Produto';
import Aluno from './src/Aluno';

export default class MeuApp extends Component {
  render() {
    return(
      <View>
        <Aluno/>
      </View>
    );
  }
}
 