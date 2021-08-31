import * as React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Users from "../data/Users";

export default function HomeScreen() {
  const user = Users[0];
  useEffect(() => {
    console.log(user);
  });
  return (
    <View style={styles.container}>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
