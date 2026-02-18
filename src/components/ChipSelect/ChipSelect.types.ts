export interface ChipSelectTypes {
  label: string;
  options: { label: string; value: string }[];
  selected: string | string[];
  multiple?: boolean;
  onSelect: (value: string) => void;
}
