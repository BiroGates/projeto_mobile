import React, { useCallback, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import { useFocusEffect } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import { getUsersById } from "../api/getUsersById";
import { auth } from "../../FireBaseConfig";
import { updateItemByEmailWithSetDoc } from "../api/updateUser";

const MyAccount = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(user.email);

  useFocusEffect(
    useCallback(() => {
      const handler = async () => {
        const userData = await getUsersById(user.email);
        setUserData(userData);
      };
      handler();

      return () => {};
    }, [userData])
  );

  const nameInitial = userData.name
    ? userData.name.charAt(0).toUpperCase()
    : "U";

  return (
    <View style={styles.container}>
      <View style={styles.letterIconTextCircle}>
        <Text style={styles.textLetter}> {nameInitial} </Text>
      </View>

      <View style={styles.inputsContainer}>
        <StyledInput
          text={"Nome"}
          placeholder={userData.name}
          onChangeTextInput={setName}
        />
        <StyledInput
          text={"Email"}
          placeholder={userData.email}
          onChangeTextInput={setEmail}
          editable={false}
        />
      </View>
      <View style={styles.buttons}>
        <StyledButton
          text={"Salvar"}
          handler={async () => {
            await updateItemByEmailWithSetDoc(userData.email, {
              name: name ? name : userData.name,
            });
          }}
        />
        <StyledButton text={"Sair"} handler={() => auth.signOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    gap: 40,
  },
  letterIconContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  letterIconTextCircle: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "blue",
  },
  letterIconText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  inputs: {},
  buttons: {
    width: "80%",
    gap: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  textLetter: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  inputsContainer: {
    width: "80%",
  },
});

export default MyAccount;
