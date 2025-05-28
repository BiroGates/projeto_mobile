import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';
import { AuthContext } from '../contexts/AuthContext';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator({ screenOptions: { headerStyle: { backgroundColor: 'tomato' }}});

export default function StackNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {false ? (
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
