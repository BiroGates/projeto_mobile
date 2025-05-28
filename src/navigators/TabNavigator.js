import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Add Habit" component={AddHabitScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Reports" component={ReportsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
