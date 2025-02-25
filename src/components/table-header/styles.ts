import { StyleSheet } from "react-native";
import { tokens } from "../../global/tokens";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: tokens.spacing.Lg,
    backgroundColor: tokens.colors.blue10,
    borderTopLeftRadius: tokens.spacing.Sml,
    borderTopRightRadius: tokens.spacing.Sml,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    width: tokens.spacing.Xxxl,
  },
  headerText: {
    fontFamily: tokens.typography.h3.fontFamily,
    fontWeight: "bold",
    fontSize: tokens.typography.h3.fontSize,
  },
});
