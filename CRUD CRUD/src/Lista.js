import React from 'react';
import { Button, View, Text } from 'react-native';
export default class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dados: [] };
    this.props.navigation.addListener('didFocus', (payload) => {
      this.listar();
    });
  }

  listar() {
    fetch('https://crudcrud.com/api/6028de7c24e1437abafd249bf8d10c6d/pessoas')
      .then((response) => response.json())
      .then((responseJson) => {
        //Success
        console.log(responseJson);
        this.setState({ dados: responseJson });
      })
      .catch((error) => console.error(error));
  }
  
  render() {
    return (
      <View>
        <Button
          title="Novo"
          onPress={() => this.props.navigation.navigate('Novo')}
        />
        <Text>Cadastros</Text>
        {this.state.dados.map((l, i) => (
          <Text>
            {l.nome} - {l.telefone}
          </Text>
        ))}
      </View>
    );
  }
}
