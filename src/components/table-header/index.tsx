import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import STRINGS from "./strings";
import { Icon } from "react-native-paper";

const TableHeader: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>{STRINGS.PHOTO}</Text>
        <View style={styles.spacer} />
        <Text style={styles.headerText}>{STRINGS.NAME}</Text>
      </View>

      <Icon source="checkbox-blank-circle" size={10} />
    </View>
  );
};

export default TableHeader;
