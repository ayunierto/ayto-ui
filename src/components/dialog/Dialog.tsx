import { CSSProperties, createContext, useState } from "react";
import "./Dialog.css";

type Props = {
  children: (args: DialogContextProps) => JSX.Element;
  className?: string;
  style?: CSSProperties;
};

interface DialogContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const DialogContext = createContext({} as DialogContextProps);
const { Provider } = DialogContext;

const Dialog = ({ children, className, style }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Provider value={{ isOpen, open, close }}>
      <div className={`${className}`} style={style}>
        {children({ isOpen, open, close })}
      </div>
    </Provider>
  );
};

export default Dialog;
