import { StyleSheet } from "react-native";
import { tokens } from "../../global/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.colors.gray00,
    borderRadius: tokens.spacing.Xxl,
    paddingVertical: tokens.spacing.Sml,
    marginVertical: tokens.spacing.Md,
  },
  icon: {
    marginRight: tokens.spacing.Sml,
  },
  input: {
    flex: 1,
    fontSize: tokens.typography.h3.fontSize,
    color: tokens.colors.black,
  },
});
