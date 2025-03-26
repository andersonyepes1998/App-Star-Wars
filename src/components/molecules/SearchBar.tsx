import { View, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

type SearchBarProps = {
  onSearch: (text: string) => void;
  searchQuery: string
}

const SearchBar = ({ onSearch, searchQuery }: SearchBarProps) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[
          styles.input,
          {
            color: theme.primaryTextColor,
            backgroundColor: theme.backgroundGray,
            borderColor: theme.yellowStarWar,
          },
        ]}
        placeholder="Buscar por nombre..."
        placeholderTextColor={theme.primaryTextColor}
        value={searchQuery}
        onChangeText={onSearch}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default SearchBar;
