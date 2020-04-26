import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from './Estilo';

function valorTotal(quant, preco) {
  return <Text>quant*preco</Text>;
}

export default function(props) {
  return <View style={Estilo.amarelinho}>
            <Text>Descrição: {props.descricao}</Text>
            <Text>Quantidade: {props.quantidade}
             - Preço: R$ {props.preco}
             - Preço Total: R$ 
             {valorTotal(props.quantidade, props.preco)}</Text>
         </View>

}