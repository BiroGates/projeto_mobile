import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BiroLogo from '../components/BiroLogo';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <BiroLogo />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
