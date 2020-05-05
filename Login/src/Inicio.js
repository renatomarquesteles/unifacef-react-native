import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      senha: '',
      mensagem: '',
    };
  }

  onEntrar() {
    const { login, senha } = this.state;
    if (login == 'admin' && senha == '123') {
      this.props.navigation.navigate('Menu');
    } else {
      this.setState({ mensagem: 'Usuário ou senha inválidos' });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.login}
          onChangeText={login => this.setState({login})}
          placeholder="Login"
        />
        <TextInput
          secureTextEntry={true}
          value={this.state.senha}
          onChangeText={senha => this.setState({senha})}
          placeholder="Senha"
        />

        <Text>{this.state.mensagem}</Text>
        <Button title="Entrar" onPress={this.onEntrar.bind(this)} />
      </View>
    );
  }
}
