import {
  FontAwesome,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  MainTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarLabelStyle: {
          fontWeight: "600",
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].yellow,
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <MainTab.Screen
        name="Messages"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Account"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export { MainTabNavigator };
