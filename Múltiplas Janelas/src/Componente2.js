import React from 'react';
import { Button, View } from 'react-native';

export default class Componente2 extends React.Component {
  static navigationOptions = {
    title: 'Componente2',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Vai para componente 1"
          onPress={() => this.props.navigation.navigate('Componente1')}
        />
      </View>
    );
  }
}
