import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { HASDONE } from '../common/constants';

const TodoCard = ({ id, todoName, hasDone, touchCardHandler, longPressHandler }) => {
     const limitedText = todoName.length > 50 
        ? todoName.slice(0, 50) + "..." 
        : todoName;


    const renderIcon = () => {
        if (hasDone === HASDONE.IDLE) {
            return (<View></View>);
        }

        if (hasDone === HASDONE.YES) {
            return (<Image style={styles.image}  resizeMode="contain" source={require('../../assets/doneIcon.png')} />);            
        }

        if (hasDone === HASDONE.NO) {
            return (<Image style={styles.image}  resizeMode="contain" source={require('../../assets/notDoneIcon.png')} />);
        }
    }
 
    return (
        <TouchableOpacity 
            onPress={() => touchCardHandler(id, { name: todoName, hasDone })} 
            onLongPress={() => longPressHandler(id)}
        >
            <View style={styles.container}>
                <View style={styles.todoIcon}>
                    <Image style={styles.image}  resizeMode="contain" source={require('../../assets/todoIconTest.png')} />
                </View>
                <View style={styles.todoName}>
                    <Text> { limitedText } </Text>
                </View>
                <View style={styles.todoHasDone}>
                    {renderIcon()}
                </View>
            </View>
        </TouchableOpacity>
)};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,

        borderBottomWidth: 1,
        borderBottomColor: '#ccc',

        // backgroundColor: 'blue',
    },
    todoName: {
        width: '50%',
        // backgroundColor: 'orange', 
    },
    todoHasDone: {
        width: 40,
        height: 40,
        backgroundColor: '#DDDDDD',
        borderRadius: '100%',
    },
    image: {
        width: 40,
        height: 40,
    },
    text: {
        
    },
});

export default TodoCard;
