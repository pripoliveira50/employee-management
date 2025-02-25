import { StyleSheet } from "react-native";
import { tokens } from "../../global/tokens";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: tokens.spacing.Md,
    backgroundColor: tokens.colors.white,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: tokens.spacing.Xl,
    backgroundColor: tokens.colors.gray00,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: tokens.typography.h3.fontSize,
    fontFamily: tokens.typography.h3.fontFamily,
    fontWeight: tokens.typography.h3.fontWeight,
    color: tokens.colors.black,
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: tokens.spacing.Xs,
    right: tokens.spacing.Xs,
    backgroundColor: tokens.colors.primary,
    color: tokens.colors.white,
  },
});
