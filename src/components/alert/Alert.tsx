import Card from "../card/Card";

import "./Alert.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "success" | "warning" | "error";
};

const Alert = ({
  children,
  className = "",
  style,
  variant = "primary",
}: Props) => {
  return (
    <Card className={`alert ${variant} ${className}`} style={style}>
      {children}
    </Card>
  );
};

export default Alert;
