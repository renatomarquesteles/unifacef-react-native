import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      telefone: '',
    };
  }

  onSalvar() {
    fetch('https://crudcrud.com/api/6028de7c24e1437abafd249bf8d10c6d/pessoas', {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.navigation.navigate('Lista');
      });
  }
  
  render() {
    return (
      <View>
        <TextInput
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
          placeholder={'nome'}
        />
        <TextInput
          value={this.state.telefone}
          onChangeText={(telefone) => this.setState({ telefone })}
          placeholder={'telefone'}
        />
        <Button title={'Salvar'} onPress={this.onSalvar.bind(this)} />
      </View>
    );
  }
}
