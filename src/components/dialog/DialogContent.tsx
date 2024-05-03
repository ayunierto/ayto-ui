import { useContext } from "react";
import { DialogContext } from "./Dialog";
import Card from "../card/Card";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogContent = ({ children, className, style }: Props) => {
  const { isOpen } = useContext(DialogContext);
  return (
    <div
      className={`dialog ${isOpen ? "open" : "closed"} ${className}`}
      style={style}
    >
      <Card
        size="large"
        className={`dialog__content ${isOpen ? "open" : "closed"}`}
      >
        {children}
      </Card>
    </div>
  );
};

export default DialogContent;
