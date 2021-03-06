import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import ChatListItem from "../components/ChatListItem";

import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButton/NewMessageButton";

export default function ChatsScreen() {
  const ChatRooms = chatRooms;
  return (
    <View style={styles.container}>
      {ChatRooms.length > 0 ? (
        <FlatList
          style={{ width: "100%" }}
          data={ChatRooms}
          renderItem={({ item }) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
          Press the button at the bottom corner to create a new message
        </Text>
      )}
      <NewMessageButton />
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
