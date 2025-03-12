import { useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { COLORS } from "@/constants/Colors";
import { router } from "expo-router";
import "../i18n.ts";
import { CardContainer } from "@/components/CardsContainer";
import { CARD_TYPES } from "@/constants/cardTypes";
import { LOCATIONS } from "@/mocks/locations";
import { RESTAURANTS } from "@/mocks/restaurants";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <ScrollView>
        <CardContainer
          cardType={CARD_TYPES.location}
          onSeeAllClick={() => console.log("onSeeAllClick")}
          cardsData={LOCATIONS}
        />
        <CardContainer
          cardType={CARD_TYPES.restaurant}
          onSeeAllClick={() => console.log("onSeeAllClick")}
          cardsData={RESTAURANTS}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
