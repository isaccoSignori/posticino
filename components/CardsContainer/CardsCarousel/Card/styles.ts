import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(width * 0.75, 380);
const CARD_HEIGHT = CARD_WIDTH * 1.2;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: COLORS.card,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginRight: 16,
    height: CARD_HEIGHT,
  },
  cardWidth: {
    width: CARD_WIDTH,
  },
  fullWidth: {
    width: "100%",
    marginRight: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    color: COLORS.textWhite,
    marginLeft: 4,
    fontWeight: "600",
    fontSize: 15,
  },
  favoriteButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.darkerOverlay,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    marginTop: "auto",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textWhite,
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: COLORS.textWhite,
    opacity: 0.9,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: COLORS.textWhite,
    opacity: 0.8,
  },
});
