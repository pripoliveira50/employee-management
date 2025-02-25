import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { List } from "react-native-paper";
import { TableRowProps } from "./model";
import { styles } from "./styles";
import STRINGS from "./strings";
import { formatPhoneNumber } from "../../utils/fortmat-telefone-number";

const TableRow: React.FC<TableRowProps> = ({
  name,
  job,
  admission_date,
  phone,
  image,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setExpanded(!expanded)}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View style={{ width: 30, alignItems: "center" }} />
        <Text style={styles.name}>{name}</Text>
        <List.Icon icon={expanded ? "chevron-up" : "chevron-down"} />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.details}>
          <Text style={styles.label}>
            {STRINGS.ROLE} <Text style={styles.value}>{job}</Text>
          </Text>
          <Text style={styles.label}>
            {STRINGS.ADMISSION_DATE}{" "}
            <Text style={styles.value}>
              {new Date(admission_date).toLocaleDateString("pt-BR")}
            </Text>
          </Text>
          <Text style={styles.label}>
            {STRINGS.PHONE}{" "}
            <Text style={styles.value}>{formatPhoneNumber(phone)}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default TableRow;
