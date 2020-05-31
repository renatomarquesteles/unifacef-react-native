import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lista from './src/Lista';
import Formulario from './src/Formulario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Formulario" component={Formulario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
