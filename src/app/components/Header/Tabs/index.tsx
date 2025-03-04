import { useState } from "react";
import { LocationIcon } from "../../icons/LocationIcon";
import { RestaurantIcon } from "../../icons/RestaurantIcon";
import { t } from "ttag";
import { Tab } from "./Tab";

const TABS_OPTIONS = {
  locations: {
    id: "locations",
    label: t`Locations`,
    Icon: LocationIcon,
  },
  restaurants: {
    id: "restaurants",
    label: t`Restaurants`,
    Icon: RestaurantIcon,
  },
} as const;

export type TabsOptionsKey = keyof typeof TABS_OPTIONS;

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabsOptionsKey>(
    TABS_OPTIONS.locations.id
  );

  return (
    <div className="flex space-x-4">
      {Object.keys(TABS_OPTIONS).map((tabId) => (
        <Tab
          key={tabId}
          Icon={TABS_OPTIONS[tabId as TabsOptionsKey].Icon}
          isActive={activeTab === tabId}
          label={TABS_OPTIONS[tabId as TabsOptionsKey].label}
          id={tabId as TabsOptionsKey}
          onClick={setActiveTab}
        />
      ))}
    </div>
  );
};
