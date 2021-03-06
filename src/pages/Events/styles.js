import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  logo: {
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    color: "#737380",
  },
  headerTextBold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 25,
    color: "#13131a",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },
  eventList: {
    marginTop: 32,
  },
  event: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  eventProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },
  eventValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },
  detailsButtom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButtomText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold",
  },
});
