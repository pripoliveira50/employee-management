import { StyleSheet } from "react-native";
import { tokens } from "../global/tokens";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: tokens.spacing.Xl,
    backgroundColor: tokens.colors.white,
  },
  space: {
    marginVertical: tokens.spacing.Md,
  },
  label: {
    fontWeight: "bold",
    fontSize: tokens.typography.h1.fontSize,
  },
});
