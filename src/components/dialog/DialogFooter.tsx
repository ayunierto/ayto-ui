type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogFooter = ({ children, className, style }: Props) => {
  return (
    <div className={`dialog__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogFooter;
