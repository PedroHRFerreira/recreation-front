export interface InputTypes {
  label: string;
  type?: string;
  value?: string;
  onInput?: (value: string) => void;
  disabled?: boolean;
}
