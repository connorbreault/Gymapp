import React from "react";
import { FlatList, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import ChatMessage from "../components/ChatMessage/ChatMessage";
import chatRoomData from "../data/Chats";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <View>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
    </View>
  );
};

export default ChatRoomScreen;
