import { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { COLORS } from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  section: {
    marginTop: 24,
  },
})

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    </View>
  );
}
