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

  render() {
    return (
      <View>
        <Text>Menu</Text>
        <Button
          title="Sair"
          onPress={() => this.props.navigation.navigate('Inicio')}
        />
      </View>
    );
  }
}
