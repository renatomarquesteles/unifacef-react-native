import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/unifacef-logo.png';
import globalStyles from '../styles/globalStyle';

export default function Componente1() {
  return (
    <View style={globalStyles.container}>
      <Image style={styles.img} source={logo} />
      <Text>Engenharia de Software</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 46
  }
});
