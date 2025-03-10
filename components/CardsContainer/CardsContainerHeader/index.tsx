import { COLORS } from "@/constants/Colors";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

interface CarsContainerHeaderProps {
  title: string;
  onClick: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 600,
  },
});

export const CardsContainerHeader = ({
  title,
  onClick,
}: CarsContainerHeaderProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("SEE_ALL")}</Text>
    </View>
  );
};
