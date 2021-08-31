import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import Colors from "../../constants/Colors";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

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
            {user.status && <Text style={styles.status}>{user.status}</Text>}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
