import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, AsyncStorage } from 'react-native';

import styles from './Estilo';

export default function Formulario({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [qtd, setQtd] = useState('');
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    try {
      AsyncStorage.getItem('compras').then(value => {
        if (value) setCompras(JSON.parse(value));
      });
    } catch (e) {
      console.error('Falha ao buscar dados');
    }
  }, []);

  async function salvarDados() {
    try {
      const item = { descricao, qtd };
      await AsyncStorage.setItem('compras', JSON.stringify([...compras, item]));
      navigation.navigate('Lista');
    } catch (e) {
      console.error('Falha ao salvar dados: ', e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Adicionar item à Lista</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={text => setDescricao(text)}
        placeholder="Descrição:"
        autoFocus
      />
      <TextInput
        style={styles.input}
        value={qtd}
        keyboardType="number-pad"
        onChangeText={text => setQtd(text)}
        placeholder="Quantidade:"
        onSubmitEditing={() => salvarDados()}
      />
      <View style={styles.botao}>
        <Button title="Adicionar" onPress={() => salvarDados()} />
      </View>
      <View style={styles.botao}>
        <Button title="Voltar" onPress={() => navigation.navigate('Lista')} />
      </View>
    </View>
  );
}
