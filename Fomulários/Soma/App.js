import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: "",
      numero2: "",
      soma: ""
    }
  }
  onCalcular() {
    const {numero1, numero2} = this.state;
    if ((numero1=="") || (numero2=="")) {
      this.setState({soma: "número inválido!"});  
    } else {
      var resultado = parseInt(numero1) + parseInt(numero2);
      this.setState({soma: resultado});
    }
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.numero1} 
        placeholder="Número 1"
        onChangeText={(numero1)=>this.setState({numero1})}/>

        <TextInput value={this.state.numero2} 
        placeholder="Número 2"
        onChangeText={(numero2)=>this.setState({numero2})}/>

        <Button title="Calcular" onPress={this.onCalcular.bind(this)}/>

        <Text>
          {this.state.soma}
        </Text>

      </View>
    )
  }

}