import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import {
  ColorSchemeName,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
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
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen";

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
  // Reusable funtions
  const userIconPress = () => {
    console.log("user icon pressed");
  };

  // Main tab navbar functions
  const searchPress = () => {
    console.log("search pressed");
  };
  const mainDotsPress = () => {
    console.log("main dots pressed");
  };

  // ChatRoom navbar functions
  const videoPress = () => {
    console.log("video pressed");
  };
  const userNamePress = () => {
    console.log("user name pressed");
  };
  const callPress = () => {
    console.log("call pressed");
  };
  const chatDotsPress = () => {
    console.log("chat dots pressed");
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
            color: "white",
            fontWeight: "400",
            fontSize: 20,
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
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitleAlign: "left",
          headerTitleContainerStyle: {
            left: -15,
          },
          title: (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity onPress={userIconPress}>
                {route.params.imageUri ? (
                  <Image
                    source={{ uri: route.params.imageUri }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor: Colors.light.grey,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor: Colors.light.grey,
                      backgroundColor: Colors.light.yellow,
                    }}
                  >
                    <FontAwesome size={50} color="white" name="user" />
                  </View>
                )}
              </TouchableOpacity>
              <View style={{ marginLeft: 10 }}>
                <TouchableOpacity onPress={userNamePress}>
                  <Text
                    style={{
                      color: Colors.light.yellow,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {route.params.name}
                  </Text>
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {route.params.name}, You
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                marginRight: 20,
              }}
            >
              <TouchableOpacity onPress={chatDotsPress}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={Colors.light.yellow}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{ title: "Contacts" }}
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
