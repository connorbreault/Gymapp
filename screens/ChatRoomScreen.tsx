import React from "react";
import { FlatList, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import ChatMessage from "../components/ChatMessage/ChatMessage";
import chatRoomData from "../data/Chats";
import MessageInputBox from "../components/MessageInputBox";

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <View style={{ height: "100%" }}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <MessageInputBox />
    </View>
  );
};

export default ChatRoomScreen;
