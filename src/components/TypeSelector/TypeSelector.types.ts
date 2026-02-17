import type { GenerationType } from "@/templates/Create/Create.types";

export interface TypeSelectorTypes {
  onSelect: (type: GenerationType) => void;
}
