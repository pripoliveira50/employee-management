import { StyleSheet } from "react-native";
import { tokens } from "../../global/tokens";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: tokens.spacing.Md,
    borderColor: tokens.colors.gray10,
    marginVertical: tokens.spacing.Sml,
    backgroundColor: tokens.colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: tokens.spacing.Md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: tokens.spacing.Xl,
    marginRight: tokens.spacing.Sml,
  },
  name: {
    flex: 1,
    fontSize: tokens.typography.h3.fontSize,
    fontFamily: tokens.typography.h3.fontFamily,
  },
  details: {
    padding: tokens.spacing.Md,
    borderTopWidth: 1,
    borderTopColor: tokens.colors.gray05,
  },
  infoContainer: {
    flexDirection: "column",
    gap: tokens.spacing.Sml,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: tokens.spacing.Xxs,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.gray05,
  },
  label: {
    fontFamily: tokens.typography.body.fontFamily,
    fontSize: tokens.typography.body.fontSize,
    fontWeight: "bold",
  },
  value: {
    fontFamily: tokens.typography.body.fontFamily,
    fontWeight: tokens.typography.body.fontWeight,
    textAlign: "right",
  },
  space: {
    marginLeft: tokens.spacing.Xxl,
  },
});
