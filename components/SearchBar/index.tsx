import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Search, X } from "lucide-react-native";
import { COLORS } from "@/constants/Colors";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
    height: "100%",
  },
  clearButton: {
    padding: 4,
  },
});

export const SearchBar = ({ value, onChangeText, onClear }: SearchBarProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search size={20} color={COLORS.secondary} style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={t("SEARCHBAR_PLACEHOLDER")}
          placeholderTextColor={COLORS.textLight}
        />
        {value.length ? (
          <TouchableOpacity onPress={onClear} style={styles.clearButton}>
            <X size={18} color={COLORS.primary} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
