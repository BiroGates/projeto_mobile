// CriarHabitoScreen.js
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import StyledInput from "../components/StyledInput";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/AuthContext";
import { useRoute } from "@react-navigation/native";
import updateTodo from "../api/updateTodo";

const categoriasMock = [
  { id: "1", nome: "Estudos", icone: "school" },
  { id: "2", nome: "Trabalho", icone: "briefcase" },
  { id: "3", nome: "Saúde", icone: "heart" },
  { id: "4", nome: "Leitura", icone: "book" },
];

export default function UpdateHabitScreen({ navigation, isUpdate = true }) {
  const route = useRoute();
  const { item } = route.params;

  const { user } = useContext(AuthContext);
  const [habito, setHabito] = useState(item.name);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(
    item.category
  );
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const handleUpdate = () => {
    try {
      updateTodo(item.id, {
        name: habito,
        category: categoriaSelecionada,
      });
      Alert.alert("To-do Atualizado com sucesso!");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Deu ruim aqui!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hábito</Text>
      <StyledInput onChangeTextInput={setHabito} text={""} realValue={habito} />

      <Text style={styles.label}>Categoria</Text>
      <Pressable
        style={styles.dropdownButton}
        onPress={() => setDropdownAberto(!dropdownAberto)}
      >
        <Text style={styles.dropdownText}>{categoriaSelecionada}</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </Pressable>

      {dropdownAberto && (
        <View style={styles.dropdownContent}>
          {categoriasMock.map((cat) => (
            <Pressable
              key={cat.id}
              style={styles.dropdownItem}
              onPress={() => {
                setCategoriaSelecionada(cat.nome);
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

        <TouchableOpacity onPress={handleUpdate}>
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
