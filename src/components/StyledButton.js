import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { borderRadiusSize, inputDefaultHeight } from '../common/constants';
import { TouchableOpacity } from 'react-native'; 

const StyledButton = ({ text }) => (
    <TouchableOpacity style={styles.button} onPress={() => console.log('Clicou!')}>
        <Text style={styles.texto}>{ text }</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: inputDefaultHeight,
    borderRadius: borderRadiusSize,
    backgroundColor: '#060ECF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white'
  } 
});

export default StyledButton;
