import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import foto from '../../assets/keanu.png';
import globalStyles from '../styles/globalStyle';

export default function Aluno() {
  return (
    <View style={globalStyles.container}>
      <Image style={styles.img} source={foto} />
      <Text>Renato Marques Teles</Text>
      <Text>renatomarquesteles@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200
  }
});
