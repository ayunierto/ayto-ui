import { useContext } from "react";
import { MenuContext } from "./Menu";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const MenuList = ({ children, className = "", style }: Props) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <div
      className={`menu__list ${isOpen ? "open" : "closed"} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default MenuList;
