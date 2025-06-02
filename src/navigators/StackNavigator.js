import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabNavigator from "./TabNavigator";
import { CardStyleInterpolators } from "@react-navigation/stack";
import MyAccount from "../screens/MyAccount";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddHabitScreen from "../screens/AddHabitScreen";
import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator({
  screenOptions: { headerStyle: { backgroundColor: "tomato" } },
});

export default function StackNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animations: {
          enabled: true,
          gestureDirection: "horizontal",
          gestureEnabled: true,
        },
      }}
    >
      {user ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
