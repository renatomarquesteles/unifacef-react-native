import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Lista extends Component {
  constructor (props) {
    super(props);

    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(data => {
        global.dados = data.movies;
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View>
        <Text>Lista de Filmes</Text>
        {
          global.dados.map((l, i) => (
            <Text key={l.title}>
              {l.title} - {l.releaseYear}
            </Text>
          ))
        }
      </View>
    )
  }
}