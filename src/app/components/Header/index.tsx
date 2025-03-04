import { BurgerMenu } from "./BurgerMenu";
import { Tabs } from "./Tabs";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-green-200">
      <div className="flex items-center space-x-4">
        <BurgerMenu />
        <Tabs />
      </div>
    </header>
  );
};
