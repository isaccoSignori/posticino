import { useState, useRef, JSX } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Dimensions,
} from "react-native";
import { ChevronDown, InfoIcon } from "lucide-react-native";
import { styles } from "./styles";
import { COLORS } from "@/constants/Colors";
import { Card } from "./Card";
import { useTranslation } from "react-i18next";

type CardType = {
  id: number;
  image: string;
  stars: number;
  name: string;
  country: string;
  description: string;
};

interface CardsCarouselProps {
  cardsData: CardType[];
  children: JSX.Element[];
  onExpand: () => void;
  isExpanded: boolean;
}

const { width } = Dimensions.get("window");

export const CardsCarousel = ({
  cardsData,
  onExpand,
  isExpanded,
  children,
}: CardsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { t } = useTranslation();

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    setActiveIndex(Math.round(scrollPosition / width));
  };

  const renderExpandedItem = ({ item }: { item: CardType }) => {
    return (
      <View style={styles.expandedItemContainer}>
        <Card
          key={`card-${item.id}`}
          data={item}
          fullWidth
          onPress={() => console.log("Press")}
        />
      </View>
    );
  };

  const renderCollapsedItem = ({ item }: { item: CardType }) => {
    return (
      <Card key={item.id} data={item} onPress={() => console.log("Press")} />
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
          keyExtractor={(item: CardType) => `flatListKeyForCard${item.id}`}
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
        keyExtractor={(item: CardType) => `flatListKeyForCard${item.id}`}
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
            key={`paginationKeyFor-${id}`}
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
