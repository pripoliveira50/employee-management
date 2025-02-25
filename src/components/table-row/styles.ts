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
  infoContainer: {
    flexDirection: "column",
    gap: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
  },
  value: {
    fontWeight: "normal",
    textAlign: "right",
  },
  space: {
    marginLeft: 40,
  },
});
