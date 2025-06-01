// CriarHabitoScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import StyledInput from "../components/StyledInput";
import { Ionicons } from "@expo/vector-icons";

const categoriasMock = [
  { id: "1", nome: "Estudos", icone: "school" },
  { id: "2", nome: "Trabalho", icone: "briefcase" },
  { id: "3", nome: "Saúde", icone: "heart" },
  { id: "4", nome: "Leitura", icone: "book" },
];

export default function CriarHabitoScreen({ navigation, isUpdate = false }) {
  const [habito, setHabito] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const handleCriar = () => {
    // Navegar tela de inicio
    console.log({ habito, categoriaSelecionada });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hábito</Text>
      <StyledInput onChangeTextInput={setHabito} text={""} />

      <Text style={styles.label}>Categoria</Text>
      <Pressable
        style={styles.dropdownButton}
        onPress={() => setDropdownAberto(!dropdownAberto)}
      >
        <Text style={styles.dropdownText}>
          {categoriaSelecionada ? categoriaSelecionada.nome : "Selecione"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </Pressable>

      {dropdownAberto && (
        <View style={styles.dropdownContent}>
          {categoriasMock.map((cat) => (
            <Pressable
              key={cat.id}
              style={styles.dropdownItem}
              onPress={() => {
                setCategoriaSelecionada(cat);
                setDropdownAberto(false);
              }}
            >
              <Ionicons
                name={cat.icone}
                size={20}
                color="purple"
                style={{ marginRight: 10 }}
              />
              <Text>[{cat.nome}]</Text>
            </Pressable>
          ))}
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>CANCELAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCriar}>
          <Text style={styles.createButton}>
            {isUpdate ? "ATUALIZAR" : "CRIAR"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
    flex: 1,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    marginTop: 20,
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContent: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    marginTop: 8,
    padding: 8,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelButton: {
    color: "#8F0808",
    fontSize: 16,
  },
  createButton: {
    color: "#43A047",
    fontSize: 16,
  },
  linhaInferior: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 8,
    width: "100%",
  },
});
