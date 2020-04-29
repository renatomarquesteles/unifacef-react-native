import React from 'react';
import { Button, View } from 'react-native';

export default class Tela1 extends React.Component {
  static navigationOptions = {
    title: 'Primeira Tela',
  };

  render() {
    return (
      <View>
        <Button
          title="Abrir segunda tela"
          onPress={() => this.props.navigation.navigate('Tela2')}
        />
      </View>
    );
  }
}
