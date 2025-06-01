import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, Pressable, TouchableOpacity } from 'react-native';
import TodoCard from '../components/TodoCard';
import Header from '../components/Header';

import { borderRadiusSize, HASDONE } from '../common/constants';
import StyledButton from '../components/StyledButton';
import getTodosById from '../api/getTodosById';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = () => {
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  
  // we will need to change this to the api calls, this is just for
  const touchCardHandler = (id) => {
    setData(data.map(item => {
      if (item.id === id) {
        item.hasDone === HASDONE.YES ? item.hasDone = HASDONE.NO : item.hasDone = HASDONE.YES;
        return item;
      }
      return item;
    }))
  }

  const renderFunction = ({ item }) => {
    return (
      <TodoCard 
        id={item.id} 
        todoName={item.todoName} 
        hasDone={item.hasDone}
        touchCardHandler={touchCardHandler}
        setModalVisible={setModalVisible}
      />
    )
  }


  useEffect(async () => {
    const data = await getTodosById(user.email);
    setData(data);
  }, []);
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
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
                <TouchableOpacity>
                  <View style={styles.actionsCard}>
                      <Text> 📊  Estatisticas </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.actionsCard}>
                      <Text> ✏️  Editar </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.actionsCard}>
                      <Text> ❌  Excluir </Text>
                  </View>
                </TouchableOpacity>
            </View>
            <StyledButton text='Cancelar' handler={() => setModalVisible(false)}/>  
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  todaySection: {
    padding: 20,
    width: '100%',
    // backgroundColor: 'red'
  },
  todoSection: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },

  modalContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },

  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: borderRadiusSize,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    borderBottomColor: '#ccc',
  }
});

export default HomeScreen;
