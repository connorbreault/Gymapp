import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  defaultAvatar: {
    backgroundColor: Colors.dark.yellow,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  userName: {
    color: Colors.light.tint,
    fontWeight: "800",
    fontSize: 18,
  },
  status: {
    fontWeight: "400",
    color: Colors.light.grey,
  },
});
export default styles;
