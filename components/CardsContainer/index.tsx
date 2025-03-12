import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CardsContainerHeader } from "./CardsContainerHeader";
import { CardsCarousel } from "./CardsCarousel";
import { Restaurant, Location, cardType as typeCard } from "@/types";

interface CardContainerProps {
  onSeeAllClick: () => void;
  cardsData: Location[] | Restaurant[];
  cardType: typeCard;
}

export const CardContainer = ({
  cardType,
  onSeeAllClick,
  cardsData,
}: CardContainerProps) => {
  return (
    <View
      style={{
        marginTop: 24,
      }}
    >
      <CardsContainerHeader cardType={cardType} onPress={onSeeAllClick} />
      <CardsCarousel
        cardsData={cardsData}
        cardType={cardType}
        onExpand={onSeeAllClick}
      />
    </View>
  );
};
