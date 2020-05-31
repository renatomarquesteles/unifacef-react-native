import React from 'react';
import { Button, View, Text, TextInput, AsyncStorage } from 'react-native';
export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      telefone: '',
    };
  }

  render() {
    return (
      <View>
        <Text>Formulário</Text>

        <TextInput
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
          placeholder="Nome:"
        />

        <TextInput
          value={this.state.telefone}
          onChangeText={telefone => this.setState({ telefone })}
          placeholder="Telefone:"
        />

        <Button title="salvar" onPress={this.salvarDados.bind(this)} />

        <Button
          title="voltar"
          onPress={() => this.props.navigation.navigate('Lista')}
        />
      </View>
    );
  }

  salvarDados = async () => {
    try {
      const { nome, telefone } = this.state;
      var p = { nome: nome, telefone: telefone };
      global.dados.push(p);
      await AsyncStorage.setItem('dados', JSON.stringify(global.dados));
      this.props.navigation.navigate('Lista');
    } catch (e) {
      console.error('falha ao salvar dados');
    }
  };
}
