import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { Subscription } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import Colors from "../../constants/Colors";

export type SubscriptionListItemProps = {
  subscription: Subscription;
};

const GymListItem = (props: SubscriptionListItemProps) => {
  const { subscription } = props;

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
          {subscription.imageUri ? (
            <Image
              source={{ uri: subscription.imageUri }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.defaultAvatar}>
              <FontAwesome size={50} color="white" name="user" />
            </View>
          )}
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{subscription.gymName}</Text>
            <Text style={styles.startDate}>
              <Text style={styles.startDateLabel}>Start Date: </Text>
              {moment(subscription.startDate).format("MMMM DD, YYYY")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GymListItem;
