import * as React from "react";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import GymSearchBox from "../components/GymSearchBox";
import GymListItem from "../components/GymListItem";

import backgroundImage from "../assets/images/homeBG.jpg";
import welcomeImage from "../assets/images/welcome.png";
import notificationsImage from "../assets/images/notifications.png";
import upcomingImage from "../assets/images/upcoming.png";
import subscriptionsImage from "../assets/images/subscriptions.png";

import Users from "../data/Users";

export default function HomeScreen() {
  const user = Users[0];
  useEffect(() => {
    // console.log(user);
  });
  return (
    <View style={styles.container}>
      <View>
        <GymSearchBox />
      </View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView>
          <View style={{ backgroundColor: "transparent" }}>
            <Image source={welcomeImage} style={styles.welcomeImage} />
            <Text style={styles.hiMessage}>Hi, {user.firstName}!</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.notificationContainer}>
              <Image source={notificationsImage} style={styles.headerImage} />
              <FlatList
                data={user.subscriptions}
                renderItem={({ item }) => <GymListItem subscription={item} />}
                keyExtractor={(item) => item.id}
                nestedScrollEnabled
              />
            </View>
            <View style={styles.notificationContainer}>
              <Image source={upcomingImage} style={styles.headerImage} />
              <FlatList
                data={user.subscriptions}
                renderItem={({ item }) => <GymListItem subscription={item} />}
                keyExtractor={(item) => item.id}
                nestedScrollEnabled
              />
            </View>
            <View style={styles.subscriptionContainer}>
              <Image source={subscriptionsImage} style={styles.headerImage} />
              <FlatList
                data={user.subscriptions}
                renderItem={({ item }) => <GymListItem subscription={item} />}
                keyExtractor={(item) => item.id}
                nestedScrollEnabled
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  welcomeImage: {
    width: 200,
    height: 75,
    marginLeft: 25,
    marginTop: 20,
  },
  hiMessage: {
    color: Colors.light.yellow,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "600",
    letterSpacing: 3,
    marginLeft: 40,
    backgroundColor: "rgba(75, 75, 75,0.8)",
    width: 140,
  },

  contentContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 200,
  },
  headerImage: { width: 175, height: 60 },
  subscriptionContainer: {
    backgroundColor: "rgba(10, 10, 10,0.8)",
    borderWidth: 1,
    borderColor: Colors.light.grey,
    borderRadius: 20,
    width: "95%",
    padding: 10,
  },
  notificationContainer: {
    backgroundColor: "rgba(10, 10, 10,0.8)",
    borderWidth: 1,
    borderColor: Colors.light.grey,
    borderRadius: 20,
    width: "95%",
    padding: 10,
    marginBottom: 10,
  },
});
