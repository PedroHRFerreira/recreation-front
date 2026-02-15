export interface ModalTypes {
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  inputs: Array<{
    label: string;
    type: "email" | "password" | "text";
    value: string;
    onChange: (value: string) => void;
  }>;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "ghost" | "rounded";
  buttonSize?: "small" | "medium" | "large";
  colorPrimary?: string;
  colorSecondary?: string;
  onSubmit: () => void;
  onClose?: () => void;
}
