import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

import styles from "./style";
import Colors from "../../constants/Colors";
import { useState } from "react";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onAddContentPress = () => {
    console.log("Add content pressed");
  };
  const onSendPress = () => {
    console.log(message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onAddContentPress}>
          <FontAwesome
            name="plus"
            size={24}
            style={styles.icon}
            color={Colors.light.tint}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Type a message"
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <TouchableOpacity onPress={onSendPress}>
        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: message ? Colors.light.tint : Colors.light.grey,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="send"
            size={28}
            color="white"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
