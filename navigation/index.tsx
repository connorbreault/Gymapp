import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { ColorSchemeName, Text, TouchableOpacity, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainTabNavigator } from "./MainTabNavigator";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import Colors from "../constants/Colors";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const onSettingsPress = () => {
    console.warn("Settings Pressed");
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          headerTitle: "G y m A p p",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: Colors.light.yellow,
            fontWeight: "600",
            fontSize: 18,
          },
          headerRight: () => (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <TouchableOpacity onPress={onSettingsPress}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={25}
                  color={Colors.light.yellow}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
