import { useContext } from "react";
import { DialogContext } from "./Dialog";

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
      <div className={`card dialog__content ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
};

export default DialogContent;
