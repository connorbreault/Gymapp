import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";
import Colors from "../../constants/Colors";
import { useState } from "react";

const GymSearchBox = () => {
  const [message, setMessage] = useState("");

  const onPress = () => {
    console.log(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <MaterialCommunityIcons
          name="magnify"
          color={Colors.light.grey}
          size={24}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={setMessage}
          value={message}
        />
      </View>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: message ? Colors.light.tint : Colors.light.grey,
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="send"
            color={Colors.light.white}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GymSearchBox;
