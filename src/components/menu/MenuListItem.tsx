import Button from "../button/Button";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const MenuListItem = ({ children, className, style, ...props }: Props) => {
  return (
    <Button
      variant="flat"
      className={`menu__list__item ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuListItem;
