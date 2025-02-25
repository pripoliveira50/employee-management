import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import STRINGS from "./strings";
import { List } from "react-native-paper";

const TableHeader: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.headerText}>{STRINGS.PHOTO}</Text>
        <View style={{ width: 50 }} />
        <Text style={styles.headerText}>{STRINGS.NAME}</Text>
      </View>

      <List.Icon icon="checkbox-blank-circle" style={{ height: 30 }} />
    </View>
  );
};

export default TableHeader;
