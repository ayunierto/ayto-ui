type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Card = ({ children, className, style }: Props) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
