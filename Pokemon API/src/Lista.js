import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Lista() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
      .then((response) => response.json())
      .then((data) => setPokeList(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pokémons</Text>
      <View style={styles.list}>
        {pokeList &&
          pokeList.map((pokemon, index) => (
            <Text style={styles.name} key={index}>
              {index + 1} -{' '}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F2F2F'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FCC80B',
    backgroundColor: '#0658E3',
    padding: 10,
  },
  list: {
    marginVertical: 15,
  },
  name: {
    width: 200,
    fontSize: 16,
    padding: 10,
    color: '#fff',
    backgroundColor: '#525252',
    borderColor: '#727272',
    borderWidth: 1,
  },
});
