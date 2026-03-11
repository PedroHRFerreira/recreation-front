import { InputType } from "@/enum/input.enum";
import { ButtonVariant, ButtonSize } from "@/enum/button.enum";

export interface ModalTypes {
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  title?: string;
  subtitle?: string;
  footerText?: string;
  onFooterClick?: () => void;
  inputs: Array<{
    label: string;
    type: `${InputType}` | InputType;
    value: string;
    onChange: (value: string) => void;
  }>;
  buttonLabel: string;
  buttonVariant?: `${ButtonVariant}` | ButtonVariant;
  buttonSize?: `${ButtonSize}` | ButtonSize;
  colorPrimary?: string;
  colorSecondary?: string;
  onSubmit: () => void;
  onClose?: () => void;
}
