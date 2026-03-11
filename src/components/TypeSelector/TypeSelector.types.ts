import { GenerationType } from "@/enum/create.enum";

export interface TypeSelectorTypes {
  onSelect: (type: GenerationType) => void;
}
