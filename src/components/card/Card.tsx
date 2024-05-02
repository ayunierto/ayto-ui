type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  shadow?: boolean;
};

const Card = ({ children, className, style, shadow }: Props) => {
  return (
    <div
      className={`card ${shadow ? "shadow" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
