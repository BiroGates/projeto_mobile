import React from "react";
import { Image, View, Text, KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { borderRadiusSize, inputDefaultHeight } from "../common/constants";

const StyledInput = ({
  text,
  passwordField = false,
  onChangeTextInput,
  placeholder,
  editable = true,
}) => (
  <View style={{ width: "100%", padding: 5 }}>
    <Text style={styles.texto}>{text}</Text>
    <KeyboardAvoidingView>
      <TextInput
        style={styles.input}
        placeholder={placeholder ? placeholder : "Digite algo..."}
        secureTextEntry={passwordField}
        onChangeText={(text) => onChangeTextInput(text)}
        editable={editable}
      />
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    height: inputDefaultHeight,
    width: "100%",
    borderWidth: 1,
    borderRadius: borderRadiusSize,
    borderColor: "#ccc",
  },
  texto: {
    paddingLeft: 7,
    marginBottom: 5,
  },
});

export default StyledInput;
