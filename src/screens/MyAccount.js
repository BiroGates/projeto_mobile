import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';

const MyAccount = () => {
    
    
    return (
        <View style={styles.container}>
            <View style={styles.letterIconTextCircle}>
                <Text style={styles.textLetter}> J </Text>
            </View>
            <View style={styles.letterIconText}>
                <Text style={styles.text}> ✏️ Editar </Text>
            </View>
            
            
            <View style={styles.inputsContainer}>
                <StyledInput text={'Nome'}/>
                <StyledInput text={'Email'}/>
                <StyledInput text={'Senha'} passwordField={true}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70, 
    alignItems: 'center',
    gap: 40,
  },
  letterIconContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  letterIconTextCircle: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  letterIconText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  inputs: {},
  buttons: {},
  text: {
    color: 'black',
    fontSize: 20,
  },
  textLetter: {
    color: 'white',
    fontSize: 25,
  },
  inputsContainer: {
    width: '80%'
  }
});

export default MyAccount;
