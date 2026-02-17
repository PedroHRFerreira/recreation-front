export interface ColorPickerTypes {
  label: string;
  colors: { label: string; value: string }[];
  onChange: (index: number, value: string) => void;
}
