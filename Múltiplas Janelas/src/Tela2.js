import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class Tela2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      resultado: '',
    };
  }

  static navigationOptions = {
    title: 'Segunda Tela',
  };
  
  onCalcular() {
    const { numero } = this.state;
    var dobro = parseInt(numero) * 2;
    var res = (
      <View>
        <Text>Dobro: {dobro}</Text>
        <Text>Metade: {numero / 2}</Text>
        <Text>Triplo: {numero * 3}</Text>
      </View>
    );
    this.setState({ resultado: res });
  }

  render() {
    return (
      <View>
        <Button
          title="abrir primeira tela"
          onPress={() => this.props.navigation.navigate('Tela1')}
        />
        <TextInput
          value={this.state.numero}
          onChangeText={numero => this.setState({ numero })}
          placeholder={'numero'}
        />

        <Button title={'Calcular'} onPress={this.onCalcular.bind(this)} />
        <View>{this.state.resultado}</View>
      </View>
    );
  }
}
