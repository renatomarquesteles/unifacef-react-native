import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../styles/globalStyle';

export default function(props) {
  return (
    <View style={styles.postItContainer}>
      <Text style={styles.title}>{props.titulo}</Text>
      <Text style={styles.date}>{props.data}</Text>
      <Text style={styles.f18}>{props.texto}</Text>
    </View>
  );
}