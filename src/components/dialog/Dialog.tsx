import React from "react";
import { CSSProperties, ReactNode, createContext, useState } from "react";
import "./Dialog.css";

type Props = {
  /**
   * Function that returns a JSX with the values to control the dialog
   */
  children: ((args: DialogContextProps) => JSX.Element) | ReactNode;
  /**
   * Additional classes to be added to the Dialog
   */
  className?: string;
  /**
   * Additional styles to be added to the Dialog
   */
  style?: CSSProperties;
};

interface DialogContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const DialogContext = createContext({} as DialogContextProps);
const { Provider } = DialogContext;

const Dialog = ({ children, className = "", style }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Provider value={{ isOpen, open, close }}>
      <div className={`${className}`} style={style}>
        {typeof children === "function"
          ? children({ isOpen, open, close })
          : children}
      </div>
    </Provider>
  );
};

export default Dialog;
