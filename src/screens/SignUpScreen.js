import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BiroLogo from "../components/BiroLogo";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBaseConfig";
import addUser from "../api/addUser";

const SignUpScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setTimeout(() => null, 3000);
    } catch (error) {
      error;
      alert(`Erro ao realizar login: ${error}`);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <BiroLogo />
        <Text style={styles.welcomeText}>Crie sua conta</Text>
      </View>
      <View style={styles.inputsContainer}>
        <StyledInput text={"Nome"} onChangeTextInput={setName} />
        <StyledInput text={"Email"} onChangeTextInput={setEmail} />
        <StyledInput
          text={"Senha"}
          passwordField={true}
          onChangeTextInput={setPassword}
        />
        <StyledButton
          text={"Cadastrar"}
          handler={async () => {
            await handleSignUp();
            await addUser({
              name: name,
              email: email,
            });
          }}
        />
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.signUpText}
        >
          Já possui um cadastro? Entrar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  welcomeContent: {
    gap: 20,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 20,
    color: "#333",
  },
  inputsContainer: {
    width: "80%",
    gap: 10,
  },
  signUpText: {
    textAlign: "center",
    fontSize: 15,
    color: "#333",
  },
});

export default SignUpScreen;
