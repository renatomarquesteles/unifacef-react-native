import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import globalStyles from './GlobalStyles';

export default function PaoDeQueijo({ navigation }) {
  const [qtd, setQtd] = useState('');
  const [ingredientes, setIngredientes] = useState({});

  function handleSubmit() {
    setIngredientes({
      polvilho: Math.round((qtd / 30) * 100) / 100,
      agua: Math.round(((qtd * 0.5) / 30) * 100) / 100,
      leiteFrio: Math.round(((qtd * 0.5) / 30) * 100) / 100,
      leite: Math.round(((qtd * 1) / 30) * 100) / 100,
      agua2: Math.round(((qtd * 1) / 30) * 100) / 100,
      oleo: Math.round(((qtd * 1) / 30) * 100) / 100,
      sal: Math.round(((qtd * 1) / 30) * 100) / 100,
      ovo: Math.round(((qtd * 3) / 30) * 100) / 100,
      queijo: Math.round(((qtd * 100) / 30) * 100) / 100,
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
      {ingredientes.polvilho && (
        <View style={globalStyles.ingredientes}>
          <Text style={globalStyles.ingredientesTitle}>Ingredientes: </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.polvilho}kg de polvilho azedo
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.agua} copo de água
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.leiteFrio} leite frio
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.leite} copo e meio de leite
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.agua2} copo e meio de agua
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.oleo} copo de óleo
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.sal} colher de sopa de sal
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.ovo} ovos
          </Text>
          <Text style={globalStyles.ingredientesText}>
            {ingredientes.queijo}g de queijo ralado
          </Text>
        </View>
      )}
    </View>
  );
}

PaoDeQueijo.navigationOptions = {
  title: 'Pão de Queijo',
};
