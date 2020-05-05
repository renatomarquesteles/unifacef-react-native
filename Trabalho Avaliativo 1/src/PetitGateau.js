import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import globalStyles from './GlobalStyles';

export default function PetitGateau({ navigation }) {
  const [qtd, setQtd] = useState('');
  const [ingredientes, setIngredientes] = useState({});

  function handleSubmit() {
    setIngredientes({
      chocolate: Math.round(((qtd * 120) / 5) * 100) / 100,
      manteiga: Math.round(((qtd * 100) / 5) * 100) / 100,
      ovos: Math.round(((qtd * 2) / 5) * 100) / 100,
      acucar: Math.round(((qtd * 0.25) / 5) * 100) / 100,
      farinha: Math.round(((qtd * 2) / 5) * 100) / 100,
    });

    Keyboard.dismiss();
  }

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        value={qtd}
        onChangeText={value => setQtd(value)}
        keyboardType="numeric"
        placeholder="Digite a quantidade desejada..."
        placeholderTextColor="#999"
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.primaryButtonText}>Calcular</Text>
      </TouchableOpacity>
      {ingredientes.chocolate && (
        <View style={globalStyles.ingredientes}>
          <Text style={globalStyles.ingredientesTitle}>Ingredientes: </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.chocolate} g de chocolate meio amargo
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.manteiga} g de manteiga
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.ovos} ovos
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.acucar} de xícara (chá) de açúcar
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.farinha} colheres (sopa) de farinha de trigo
          </Text>
        </View>
      )}
    </View>
  );
}

PetitGateau.navigationOptions = {
  title: 'Petit Gateau',
};
