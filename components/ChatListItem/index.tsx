import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import Colors from "../../constants/Colors";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const navigation = useNavigation();

  const user = chatRoom.users[1];

  const onPress = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
      imageUri: user.imageUri,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {user.imageUri !== "" ? (
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          ) : (
            <View style={styles.defaultAvatar}>
              <FontAwesome size={50} color="white" name="user" />
            </View>
          )}
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.lastMessage} numberOfLines={1}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.createdAt}>
          {moment(chatRoom.lastMessage.createdAt).format("MM/DD/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
