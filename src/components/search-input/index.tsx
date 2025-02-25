import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "./styles";
import { SearchInputProps } from "./model";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Pesquisar",
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (text: string) => {
    setQuery(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <IconButton icon="magnify" size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleChange}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default SearchInput;
