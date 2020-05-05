import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import globalStyles from './GlobalStyles';
import foto from './assets/jake.jpg';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.profile}>
        <Image source={foto} style={styles.img} />
        <Text style={styles.name}>Renato Marques Teles</Text>
      </View>
      <Text style={globalStyles.title}>Escolha uma receita:</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('PaoDeQueijo')}
        style={globalStyles.primaryButton}
      >
        <Text style={globalStyles.primaryButtonText}>Pão de queijo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PetitGateau')}
        style={globalStyles.primaryButton}
      >
        <Text style={globalStyles.primaryButtonText}>Petit Gateau</Text>
      </TouchableOpacity>
    </View>
  );
}

Home.navigationOptions = {
  title: 'Página Inicial',
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    margin: 5,
  },
  profile: {
    marginBottom: 15,
  },
});