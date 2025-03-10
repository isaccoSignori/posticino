import { useState } from "react";
import {ScrollView, SafeAreaView } from "react-native";
import { COLORS } from "@/constants/Colors";
import { router } from "expo-router";
import '../i18n.ts';

export default function Index() {


  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.background,
    }}>
      <ScrollView >


      </ScrollView>
    </SafeAreaView>
  );
}
