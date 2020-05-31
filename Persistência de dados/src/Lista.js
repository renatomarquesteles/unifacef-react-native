import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements';
export default class Lista extends React.Component {
  constructor(props) {
    super(props);

    try {
      AsyncStorage.getItem('dados').then(value => {
        global.dados = JSON.parse(value) || [];
      });
    } catch (e) {
      console.error('falha ao ler dados');
    }
  }

  willFocus = this.props.navigation.addListener('willFocus', payload => {
    this.forceUpdate();
  });

  render() {
    return (
      <View>
        <Text>Lista2</Text>

        {global.dados.map((l, i) => (
          <Text>
            {l.nome} - {l.telefone}
          </Text>
        ))}

        <Button
          title="novo"
          onPress={() => this.props.navigation.navigate('Formulario')}
        />
      </View>
    );
  }
}
