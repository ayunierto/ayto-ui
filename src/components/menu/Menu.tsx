import { createContext, useState } from "react";

import "./Menu.css";

type Props = {
  children: (args: MenuContextProps) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
};

interface MenuContextProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuContext = createContext({} as MenuContextProps);
const MenuProvider = MenuContext.Provider;

const Menu = ({ children, className, style }: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  return (
    <MenuProvider value={{ isOpen, toggle }}>
      <div className={`menu ${className}`} style={style}>
        {children({ isOpen, toggle })}
      </div>
    </MenuProvider>
  );
};

export default Menu;
