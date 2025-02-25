import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E6E6FA",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    width: 50,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
