type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogHeader = ({ children, className, style }: Props) => {
  return (
    <div className={`dialog__header ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogHeader;
