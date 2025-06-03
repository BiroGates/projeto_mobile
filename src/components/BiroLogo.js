import React from "react";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

const BiroLogo = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      resizeMode="contain"
      source={require("../../assets/BiroLogoDark.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    color: "#333",
  },
});

export default BiroLogo;
