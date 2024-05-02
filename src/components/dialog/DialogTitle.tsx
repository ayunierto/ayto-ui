type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const DialogTitle = ({ children, className, style }: Props) => {
  return (
    <h2 className={`${className}`} style={style}>
      {children}
    </h2>
  );
};

export default DialogTitle;
