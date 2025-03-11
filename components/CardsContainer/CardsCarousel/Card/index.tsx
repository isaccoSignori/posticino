import { useState } from "react";
import { COLORS } from "@/constants/Colors";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Star, Heart } from "lucide-react-native";
import { styles } from "./styles";
import { Restaurant, Location } from "@/types";

interface CardProps {
  data: Location | Restaurant;
  onPress: () => void;
  fullWidth?: boolean;
}

export const Card = ({ data, onPress, fullWidth }: CardProps) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        fullWidth ? styles.fullWidth : styles.cardWidth,
      ]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7"]}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.ratingContainer}>
            <Star size={16} color={COLORS.tertiary} fill={COLORS.tertiary} />
            <Text style={styles.rating}>{data.stars.toFixed(1)}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsFavourite((prevState) => !prevState)}
            style={styles.favoriteButton}
          >
            <Heart
              size={22}
              color={COLORS.textWhite}
              fill={isFavourite ? COLORS.primary : "transparent"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.location}>{data.location}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
