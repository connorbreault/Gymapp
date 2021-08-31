import moment from "moment";
import React from "react";
import { Text, View } from "react-native";

import { Message } from "../../types";
import styles from "./style";
import Colors from "../../constants/Colors";

export type ChatMessageProps = {
  message: Message;
};
const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage()
              ? Colors.light.white
              : Colors.light.lightGrey,
            borderColor: isMyMessage()
              ? Colors.light.tint
              : Colors.light.yellow,
            marginRight: isMyMessage() ? 0 : 50,
            marginLeft: isMyMessage() ? 50 : 0,
          },
        ]}
      >
        {!isMyMessage() && (
          <Text style={styles.userName}>{message.user.firstName}</Text>
        )}
        <Text style={styles.content}>{message.content}</Text>

        <Text style={styles.createdAt}>
          {moment(message.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
