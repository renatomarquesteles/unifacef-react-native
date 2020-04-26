import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Estilo from './Estilo';

export default class Aluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nota1: '',
      nota2: '',
      faltas: '',
      media: '',
      resultado: '',
    };
  }

  onCalcular() {
    const { nota1, nota2, faltas } = this.state;
    var media = (parseInt(nota1) + parseInt(nota2)) / 2;
    var r = <Text style={Estilo.textoAzul}>aprovado</Text>;

    this.setState({ media: media, resultado: r });
  }

  render() {
    return (
      <View style={Estilo.amarelinho}>
        <Text>Aluno</Text>
        <TextInput
          value={this.state.nota1}
          placeholder="Nota 1"
          onChangeText={nota1 => this.setState({ nota1 })}
        />

        <TextInput
          value={this.state.nota2}
          placeholder="Nota 2"
          onChangeText={nota2 => this.setState({ nota2 })}
        />

        <TextInput
          value={this.state.faltas}
          placeholder="Faltas"
          onChangeText={faltas => this.setState({ faltas })}
        />

        <Button title="Calcular" onPress={this.onCalcular.bind(this)} />

        <Text>{this.state.media}</Text>
        <View>{this.state.resultado}</View>
      </View>
    );
  }
}
