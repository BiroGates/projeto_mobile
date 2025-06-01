import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AddHabitScreen from "../screens/AddHabitScreen";
import ReportsScreen from "../screens/ReportsScreen";
import MyAccount from "../screens/MyAccount";
import HomeStack from "../screens/HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ADD"
        component={AddHabitScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
