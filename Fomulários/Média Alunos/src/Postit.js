import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from './Estilo';

export default function(props) {
  return <View style={Estilo.amarelinho}>
            <Text style={Estilo.titulo}>{props.titulo}</Text>
            <Text style={Estilo.data}>{props.data}</Text>
            <Text style={Estilo.texto}>{props.texto}</Text>
         </View>

}