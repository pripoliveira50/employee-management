import React from "react";
import { View, Text } from "react-native";
import { IconButton, Badge } from "react-native-paper";
import { styles } from "./styles";
import { HeaderProps } from "./model";

const Header: React.FC<HeaderProps> = ({ initials, notifications }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.notificationContainer}>
        <IconButton icon="bell-outline" size={24} onPress={() => {}} />
        {notifications > 0 && (
          <Badge style={styles.badge}>{notifications}</Badge>
        )}
      </View>
    </View>
  );
};

export default Header;
