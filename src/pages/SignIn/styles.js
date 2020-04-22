import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#9c27b0",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 40,
    borderRadius: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
    marginTop: 20,
  },
  signup: {
    color: "white",
    fontSize: 11,
    marginTop: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  errorMessage: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 20,
  },
});
