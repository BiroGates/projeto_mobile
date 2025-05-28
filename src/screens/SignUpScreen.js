import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BiroLogo from '../components/BiroLogo';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <BiroLogo />
        <Text style={styles.welcomeText}>Crie sua conta</Text>
      </View>  
      <View style={styles.inputsContainer}>
        <StyledInput text={'Nome'}/>
        <StyledInput text={'Email'}/>
        <StyledInput text={'Senha'} passwordField={true}/>
        <StyledButton text={'Cadastrar'}/>
        <Text onPress={() => navigation.navigate('Login')} style={styles.signUpText}>Já possui um cadastro? Entrar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    gap: 40,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  welcomeContent: {
    gap: 20,
    // backgroundColor: 'yellow',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  },
  inputsContainer: {
    width: '80%',
    gap: 10,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
  }
});

export default SignUpScreen;
