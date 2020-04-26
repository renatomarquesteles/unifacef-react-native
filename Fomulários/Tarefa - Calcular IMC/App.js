import React, { useEffect, useState } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  function handleIMC() {
    if (imc < 20) {
      return (<Text style={styles.magro}>Magro</Text>);
    } else if (imc <= 26) {
      return (<Text style={styles.pesoIdeal}>Peso ideal</Text>);
    } else if (imc > 26) {
      return (<Text style={styles.sobrepeso}>Sobrepeso</Text>);
    }
  }

  function calcularIMC() {
    if (!peso || !altura) return;

    const imc = peso / altura ** 2;
    setImc(imc.toFixed());
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultado}>
        <Text style={styles.imc}>{imc}</Text>
        {imc !== '' && handleIMC()}
      </View>

      <TextInput
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={text => setPeso(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Altura (m)"
        value={altura}
        onChangeText={text => setAltura(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={calcularIMC} style={styles.botao}>
        <Text style={styles.botaoText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    alignSelf: 'stretch',
    height: 44,
    fontSize: 18,
    paddingLeft: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  botao: {
    alignSelf: 'stretch',
    height: 44,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bcd4',
    borderRadius: 8,
  },
  botaoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imc: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  magro: {
    color: '#ffa34d',
    fontWeight: 'bold',
  },
  pesoIdeal: {
    color: '#1eb2a6',
    fontWeight: 'bold',
  },
  sobrepeso: {
    color: '#f67575',
    fontWeight: 'bold',
  },
});
