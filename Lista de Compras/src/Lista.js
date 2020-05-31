import React, { useState, useEffect } from 'react';
import { Button, View, Text, AsyncStorage, FlatList } from 'react-native';

import styles from './Estilo';

export default function Lista({ navigation }) {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    loadCompras();
  }, []);

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      loadCompras();
    });

    return refresh;
  }, [navigation]);

  function loadCompras() {
    try {
      AsyncStorage.getItem('compras').then(value => {
        setCompras(JSON.parse(value));
      });
    } catch (e) {
      console.error('Falha ao buscar compras');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <FlatList
        style={styles.list}
        data={compras}
        keyExtractor={item => item.descricao}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.qtd}x {item.descricao}
          </Text>
        )}
      />
      <Button
        title="Novo Item"
        onPress={() => navigation.navigate('Formulario')}
      />
    </View>
  );
}
