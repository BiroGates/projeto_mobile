import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import TodoCard from "../components/TodoCard";
import Header from "../components/Header";

import { borderRadiusSize, HASDONE } from "../common/constants";
import StyledButton from "../components/StyledButton";
import { AuthContext } from "../contexts/AuthContext";
import { getTodosById } from "../api/getTodosById";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import updateTodo from "../api/updateTodo";
import deleteTodo from "../api/deleteTodo";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../FireBaseConfig";

const HomeScreen = () => {
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [lastHoldId, setLastHoldId] = useState([]);
  const [_, forceUpdate] = useState(0);

  const navigation = useNavigation();

  const touchCardHandler = (id, item) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.hasDone === HASDONE.YES
            ? (item.hasDone = HASDONE.NO)
            : (item.hasDone = HASDONE.YES);
          return item;
        }
        return item;
      })
    );

    updateTodo(id, {
      ...item,
      hasDone: item.hasDone === HASDONE.YES ? HASDONE.NO : HASDONE.YES,
    });
  };

  const renderFunction = ({ item }) => {
    return (
      <TodoCard
        id={item.id}
        todoName={item.name}
        hasDone={item.hasDone}
        touchCardHandler={touchCardHandler}
        longPressHandler={longPressHandler}
      />
    );
  };

  const longPressHandler = (id) => {
    setModalVisible(true);
    setLastHoldId(id);
  };

  const updatePressHandler = () => {
    navigation.navigate("UpdateHabit", {
      item: { ...data.find((i) => i.id === lastHoldId) },
    });
  };

  const deleteHandler = async () => {
    deleteTodo(lastHoldId);
    forceUpdate((n) => n + 1);
    Alert.alert("Todo Deletado com sucesso!");
    setModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      const handler = async () => {
        const data = await getTodosById(user.email);
        setData(data);
      };
      handler();

      return () => {};
    }, [data])
  );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todaySection}>
        <Text style={styles.texto}> Hoje </Text>
      </View>

      <View style={styles.todoSection}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderFunction}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ReportScreen");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.actionsCard}>
                <Text> 📊 Estatisticas </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updatePressHandler();
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.actionsCard}>
                <Text> ✏️ Editar </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                deleteHandler();
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.actionsCard}>
                <Text> ❌ Excluir </Text>
              </View>
            </TouchableOpacity>
          </View>
          <StyledButton
            text="Cancelar"
            handler={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <View style={styles.createHabit}>
        <TouchableOpacity onPress={() => navigation.navigate("AddHabit")}>
          <Image
            resizeMode="contain"
            source={require("../../assets/adicionar.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  todaySection: {
    padding: 20,
    width: "100%",
    // backgroundColor: 'red'
  },
  todoSection: {
    flex: 1,
    width: "100%",
    // backgroundColor: 'yellow',
  },
  texto: {
    fontSize: 18,
    color: "#333",
  },

  modalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: borderRadiusSize,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
  },

  actionsCard: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  createHabit: {
    width: "90%",
    padding: 20,
    alignItems: "flex-end",
  },
});

export default HomeScreen;
