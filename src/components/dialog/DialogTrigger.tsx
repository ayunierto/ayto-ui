type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
};

const DialogTrigger = ({ children, className, style, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${className}`}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </div>
  );
};

export default DialogTrigger;
