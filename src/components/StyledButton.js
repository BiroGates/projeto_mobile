import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { borderRadiusSize, inputDefaultHeight } from '../common/constants';
import { TouchableOpacity } from 'react-native'; 

const StyledButton = ({ text, handler, widthSize }) => (
    <TouchableOpacity style={styles.button} onPress={() => handler()}>
        <Text style={styles.texto}>{ text }</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
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
