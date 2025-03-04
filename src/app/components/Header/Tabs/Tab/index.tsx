import { FC } from "react";
import { TabsOptionsKey } from "..";

type TabProps = {
  Icon: FC;
  onClick: (id: TabsOptionsKey) => void;
  id: TabsOptionsKey;
  label: string;
  isActive: boolean;
};

export const Tab = ({ Icon, onClick, isActive, label, id }: TabProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
        isActive ? "border-green-500" : "border-transparent"
      }`}
    >
      <Icon />
      <span>{label}</span>
    </button>
  );
};
