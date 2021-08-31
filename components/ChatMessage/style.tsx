import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  userName: {
    color: Colors.light.tint,
    fontWeight: "600",
    fontSize: 20,
  },
  content: {
    color: Colors.light.grey,
    fontWeight: "400",
    fontSize: 20,
  },
  createdAt: {
    color: Colors.light.tint,
    alignSelf: "flex-end",
  },
});

export default styles;
