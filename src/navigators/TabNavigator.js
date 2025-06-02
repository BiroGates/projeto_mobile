import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyAccount from "../screens/MyAccount";
import HomeStack from "../screens/HomeStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "calendar-check" : "calendar-blank-outline";
          } else if (route.name === "MyAccount") {
            iconName = focused ? "account" : "account-outline";
          }

          // Retorne o componente do ícone dinamicamente
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        animations: {
          enabled: true,
          gestureDirection: "horizontal",
          gestureEnabled: true,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.7)",
        tabBarStyle: {
          backgroundColor: "#0A1137",
          height: 55 + insets.bottom,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 15,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        headerShown: false,
      })}
    >
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
    </Tab.Navigator>
  );
}
