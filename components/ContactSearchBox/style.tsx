import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Colors.light.lightGrey,
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 20,
  },
  buttonContainer: {
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
