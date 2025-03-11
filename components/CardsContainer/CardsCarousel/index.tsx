import { useState, useRef, JSX } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from "react-native";
import { ChevronDown } from "lucide-react-native";
import { styles } from "./styles";
import { COLORS } from "@/constants/Colors";
import { Card } from "./Card";
import { useTranslation } from "react-i18next";
import { Restaurant, Location } from "@/types";

interface CardsCarouselProps {
  cardsData: Location[] | Restaurant[];
  onExpand: () => void;
  isExpanded: boolean;
  cardType: "location" | "restaurant";
}

const { width } = Dimensions.get("window");

export const CardsCarousel = ({
  cardsData,
  onExpand,
  isExpanded,
  cardType,
}: CardsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { t } = useTranslation();

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    setActiveIndex(Math.round(scrollPosition / width));
  };

  const renderExpandedItem = ({ item }: { item: Location | Restaurant }) => {
    return (
      <View style={styles.expandedItemContainer}>
        <Card
          key={`cardExpanded-${item.id}-${cardType}`}
          data={item}
          fullWidth
          onPress={() => console.log("Press")}
        />
      </View>
    );
  };

  const renderCollapsedItem = ({ item }: { item: Location | Restaurant }) => {
    return (
      <Card
        key={`cardCollapsed-${item.id}-${cardType}`}
        data={item}
        onPress={() => console.log("Press")}
      />
    );
  };

  if (isExpanded) {
    return (
      <View style={styles.expandedContainer}>
        <TouchableOpacity
          style={styles.collapseButton}
          onPress={onExpand}
          activeOpacity={0.7}
        >
          <ChevronDown size={24} color={COLORS.text} />
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={cardsData}
          renderItem={renderExpandedItem}
          keyExtractor={(item: Location | Restaurant) =>
            `flatListKeyForCard${item.id}-${cardType}`
          }
          contentContainerStyle={styles.expandedList}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={cardsData}
        renderItem={renderCollapsedItem}
        keyExtractor={(item: Location | Restaurant) =>
          `flatListKeyForCard${item.id}-${cardType}`
        }
        contentContainerStyle={styles.list}
        horizontal
        pagingEnabled={false}
        decelerationRate="fast"
        snapToAlignment="center"
        onScroll={onScroll}
      />
      <TouchableOpacity
        style={styles.expandButton}
        onPress={onExpand}
        activeOpacity={0.7}
      >
        <Text style={styles.expandButton}>{t("EXPAND")}</Text>
      </TouchableOpacity>
      <View style={styles.pagination}>
        {cardsData.map(({ id }: { id: number }, index: number) => (
          <View
            key={`paginationKeyFor-${id}-${cardType}`}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
