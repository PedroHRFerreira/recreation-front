export interface ButtonTypes {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "rounded" | "icon" | "circle";
  size?: "small" | "medium" | "large";
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  hoverEffect?: boolean;
}
