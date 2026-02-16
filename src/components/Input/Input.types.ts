export interface InputTypes {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onInput?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
