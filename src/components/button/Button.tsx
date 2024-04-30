type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Button = ({ children, className, style }: Props) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};

export default Button;
