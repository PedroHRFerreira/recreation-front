import { ButtonVariant, ButtonSize, ButtonType } from "@/enum/button.enum";

export interface ButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
  type?: `${ButtonType}` | ButtonType;
  disabled?: boolean;
  variant?: `${ButtonVariant}` | ButtonVariant;
  size?: `${ButtonSize}` | ButtonSize;
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  hoverEffect?: boolean;
}
