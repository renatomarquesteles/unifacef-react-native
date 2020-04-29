import React from 'react';
import { Button, View } from 'react-native';

export default class Componente1 extends React.Component {
  static navigationOptions = {
    title: 'Componente1',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Vai para componente 2"
          onPress={() => this.props.navigation.navigate('Componente2')}
        />
        <Button
          title="Vai para Tela1"
          onPress={() => this.props.navigation.navigate('Tela1')}
        />
        <Button
          title="Vai para Tela2"
          onPress={() => this.props.navigation.navigate('Tela2')}
        />
      </View>
    );
  }
}
