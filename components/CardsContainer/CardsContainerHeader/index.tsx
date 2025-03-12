import { COLORS } from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react-native";
import { cardType as typeCard } from "@/types";

interface CarsContainerHeaderProps {
  cardType: typeCard;
  onPress: () => void;
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
  cardType,
  onPress,
}: CarsContainerHeaderProps) => {
  const { t } = useTranslation();

  const title = cardType === 'location' ? t('LOCATION_CAROUSEL_TITLE') : t('RESTAURANT_CAROUSEL_TITLE')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.seeAllButton} onPress={onPress}>
        <Text style={styles.seeAllText}>{t("SEE_ALL")}</Text>
        <ChevronRight size={16} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};
