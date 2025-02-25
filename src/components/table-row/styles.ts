import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
  },
  value: {
    fontWeight: "normal",
  },
});
