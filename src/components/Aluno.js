import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../styles/globalStyle';

function status(n1, n2, faltas) {
  const media = (n1+n2)/2;

  if (media >= 6 && faltas < 20) {
    return <Text style={styles.textBlue}>Aprovado</Text>;
  }

  return <Text style={styles.textRed}>Reprovado</Text>;
}

export default function({ nome, n1, n2, faltas }) {
  return (
    <View style={styles.postItContainer}>
      <Text style={styles.title}>Aluno</Text>
      <Text>Nome: {nome}</Text>
      <Text>Nota 1: {n1}</Text>
      <Text>Nota 2: {n2}</Text>
      <Text>Quantiade de Faltas: {faltas}</Text>
      <Text>Status: {status(n1, n2, faltas)}</Text>
    </View>
  );
}