import React from "react";
import { StyleSheet, Text } from "react-native";
import { borderRadiusSize, inputDefaultHeight } from "../common/constants";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const StyledButton = ({ text, handler }) => (
  <TouchableOpacity style={styles.button} onPress={() => handler()}>
    <LinearGradient
      colors={["#060ECF", "#0A1137"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.texto}>{text}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: inputDefaultHeight,
    borderRadius: borderRadiusSize,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    padding: 10,
    width: "100%",
    height: inputDefaultHeight,
    absoluteFill: true,
    borderRadius: borderRadiusSize,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StyledButton;
