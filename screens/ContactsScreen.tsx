import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import ContactListItem from "../components/ContactListItem";

import Users from "../data/Users";
import ContactSearchBox from "../components/ContactSearchBox";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <ContactSearchBox />
      <FlatList
        style={{ width: "100%" }}
        data={Users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
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
