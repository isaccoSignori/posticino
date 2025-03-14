import { Tabs } from "expo-router";
import { Compass, MapPin, Utensils } from "lucide-react-native";
import { COLORS } from "@/constants/Colors";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
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
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
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
          tabBarIcon: ({size, color}) => <Compass size={size} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: t("TABS.LOCATIONS"),
          tabBarIcon: ({size, color}) => <MapPin size={size} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="restaurants"
        options={{
          title: t("TABS.RESTAURANTS"),
          tabBarIcon: ({size, color}) => <Utensils size={size} color={color}/>,
        }}
      />
    </Tabs>
  );
}
