import React from 'react';
import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native';

const BiroLogo = () => (
  <View style={styles.container}>
    <Image source={require('../../assets/BiroLogoDark.png')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'blue' 
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});

export default BiroLogo;
