import "./Card.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  shadow?: boolean;
  size?: "small" | "medium" | "large";
  hoverable?: boolean;
};

const Card = ({
  children,
  className,
  style,
  shadow,
  size = "medium",
  hoverable = false,
}: Props) => {
  return (
    <div
      className={`card ${size} ${shadow ? "shadow" : ""} ${hoverable ? "hoverable" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
