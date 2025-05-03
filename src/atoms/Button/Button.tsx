import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
  children?: ReactNode;
  Icon?: React.ElementType;
  iconPosition?: "left" | "right";
  customStyles?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  loading = false,
  disabled,
  children,
  iconPosition = "left",
  Icon,
  customStyles,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center px-3.5 py-4 rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed text-sm font-medium gap-1 cursor-pointer text-nowrap";
  const styles = {
    primary: "bg-[#603AE51A] text-default-purple-color hover:bg-[#603AE51A]",
    secondary: "bg-default-purple-color text-white hover:bg-[#603AE599]",
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
      style={customStyles}
      disabled={disabled || loading}
      {...rest}
    >
      {iconPosition === "left" && Icon && <Icon />}
      {children || label}
      {iconPosition === "right" && Icon && <Icon />}
    </button>
  );
};

export default Button;
