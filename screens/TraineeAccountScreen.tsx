import * as React from "react";
import { useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import LottieView from "lottie-react-native";

import Users from "../data/Users";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native";
import { Platform } from "react-native";

export default function HomeScreen() {
  const user = Users[0];
  useEffect(() => {
    // console.log(user);
  });

  const onEditUserPress = () => {
    console.log("edit user pressed");
  };
  const onEditSubscriptionsPress = () => {
    console.log("edit subscriptions pressed");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.userName}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.userStatus}>{user.status}</Text>
        <View style={styles.heightWeightContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoHeader}>Height</Text>
            <Text style={styles.info}>69</Text>
            <Text style={styles.infoSubHeader}>in.</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoHeader}>Weight</Text>
            <Text style={styles.info}>69</Text>
            <Text style={styles.infoSubHeader}>lbs.</Text>
          </View>
        </View>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/traineeAnimation.json")}
          style={{ width: 300, height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeader}>Goal:</Text>
          <Text style={styles.info}>User.goal or something</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.editUser}>
            <Button title="Edit User" onPress={onEditUserPress} color="white" />
          </View>
          <View style={styles.editSubscribers}>
            <Button
              title="Edit Subscriptions"
              onPress={onEditSubscriptionsPress}
              color="white"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    alignSelf: "flex-start",
    color: Colors.light.tint,
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "600",
    marginLeft: 25,
    marginTop: 25,
  },
  userStatus: {
    alignSelf: "flex-start",
    color: Colors.light.yellow,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "600",
    marginLeft: 40,
    fontStyle: "italic",
  },
  infoContainer: {
    backgroundColor: "rgba(50, 50, 50,0.8)",
    borderRadius: 15,
    borderColor: Colors.light.tint,
    borderWidth: 1,
    padding: 10,
    alignContent: "center",
  },
  infoHeader: {
    color: Colors.light.tint,
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    fontWeight: "500",
    textAlign: "center",
  },
  info: {
    color: Colors.light.yellow,
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    textAlign: "center",
  },
  infoSubHeader: {
    color: Colors.light.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  heightWeightContainer: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    marginTop: 20,
  },
  buttonContainer: {
    width: "90%",
    marginVertical: 20,
  },
  editUser: {
    borderRadius: 25,
    backgroundColor: Colors.light.tint,
    marginBottom: 25,
  },
  editSubscribers: {
    borderRadius: 25,
    backgroundColor: Colors.light.yellow,
  },
});
