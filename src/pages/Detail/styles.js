import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    borderRadius: 50,
  },
  event: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 48,
  },
  eventProperty: {
    fontSize: 14,
    color: "#41414d",
    marginTop: 24,
    fontWeight: "bold",
  },
  eventValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
  },
  contentBox: {
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  ContentTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30,
  },
  ContentDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
