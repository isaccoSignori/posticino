import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CardsContainerHeader } from "./CardsContainerHeader";

interface CardContainerProps {}

export const CardContainer = ({
    sectionTitle,
    onSeeAllClick,
}: CardContainerProps) => {
  return (
    <View
      style={{
        marginTop: 24,
      }}
    >
        <CardsContainerHeader title={sectionTitle} />
    </View>
  );
};
