type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogBody = ({ children, className, style }: Props) => {
  return (
    <div className={`dialog__body ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogBody;
