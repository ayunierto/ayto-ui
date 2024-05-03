import "./Input.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
};

const Input = ({
  children,
  className,
  style,
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <input
      type={type}
      className={`${className}`}
      style={style}
      {...props}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      {children}
    </input>
  );
};

export default Input;
