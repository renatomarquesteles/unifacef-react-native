import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../styles/globalStyle';

function valorTotal(quant, preco) {
  return quant*preco;
}

export default function({ descricao, quantidade, preco }) {
  return (
    <View style={styles.postItContainer}>
      <Text style={styles.title}>Produto</Text>
      <Text>{descricao}</Text>
      <Text>{quantidade}</Text>
      <Text>{preco}</Text>
      <Text>Preço total: R$ {valorTotal(quantidade, preco)}</Text>
    </View>
  );
}