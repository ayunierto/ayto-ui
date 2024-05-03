import "./Button.css";

type Props = {
  /**
   * Children to be rendered inside the button
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the button
   */
  className?: string;
  /**
   * Additional styles to be added to the button
   */
  style?: React.CSSProperties;
  /**
   * Function to execute on click
   */
  onClick?: () => void;
  /**
   * Variant of the button
   */
  variant?: "flat" | "solid" | "bordered";
  /**
   * Color of the button
   */
  color?: "default" | "primary" | "success";
  /**
   * Size of the button
   */
  size?: "small" | "medium" | "large";
  /**
   * Disabled state of the button
   */
  disabled?: boolean;
  /**
   * Type of the button
   */
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className,
  style,
  onClick,
  color = "default",
  variant = "solid",
  size = "medium",
  disabled,
  type,
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${color} ${variant} ${size} ${disabled ? "disabled" : ""} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
