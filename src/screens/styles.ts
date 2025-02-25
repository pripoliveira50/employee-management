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
    fontFamily: tokens.typography.h1.fontFamily,
    fontWeight: tokens.typography.h1.fontWeight,
    fontSize: tokens.typography.h1.fontSize,
  },
});
