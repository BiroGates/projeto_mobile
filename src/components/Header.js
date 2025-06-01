import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
  <View style={styles.container}>
    <View style={styles.nameIcon}> 
        <Text style={styles.text}> { user.email[0].toUpperCase() } </Text>
    </View>
    <View style={styles.welcomeContainer}> 
        <Text style={styles.welcomeText}> Boas Vindas, { user.email } </Text>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {  
    padding: 40,
    width: '100%',
    height: 150,
    justifyContent: 'flex-starts',
    flexDirection: 'row',
    gap: 10,
  },
  nameIcon: {
    width: 70,
    height: 70,

    justifyContent: 'center',
    alignContent: 'center',

    backgroundColor: 'blue',
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  welcomeContainer: {
    width: 230,
    justifyContent: 'center',
  }, 
  welcomeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});

export default Header;
