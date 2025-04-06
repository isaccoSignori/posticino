import "../i18n";
import { Tabs } from "expo-router";
import { Compass, MapPinPlus, User } from "lucide-react-native";
import { COLORS } from "@/constants/Colors";
import { useTranslation } from "react-i18next";

export default function RootLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          elevation: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarIconStyle: {
          marginBottom: 5,
        },
        tabBarLabelPosition: "below-icon",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("TABS.HOME"),
          tabBarIcon: ({ size, color }) => <Compass size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/add"
        options={{
          title: t("TABS.ADD"),
          tabBarIcon: ({ size, color }) => <MapPinPlus size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: t("TABS.PROFILE"),
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
