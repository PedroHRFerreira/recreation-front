import { ButtonTypes } from "./Button.types";
import styles from "./styles.module.scss";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
  className = "",
  colorPrimary = "#ff3d7f",
  colorSecondary = "#ff1a6e",
}: ButtonTypes) => {
  const buttonClasses = `${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className}`;

  const style: React.CSSProperties = {
    ["--color-primary" as any]: colorPrimary,
    ["--color-secondary" as any]: colorSecondary,
  };

  return (
    <button
      className={buttonClasses}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
