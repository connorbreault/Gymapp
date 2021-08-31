import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation";

const NewMessageButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Contacts");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
