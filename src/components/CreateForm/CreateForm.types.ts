import { GenerationType } from "@/enum/create.enum";
import type { CreateFormData } from "@/templates/Create/Create.types";

export interface CreateFormTypes {
  generationType: GenerationType;
  onGenerate: (data: CreateFormData) => void;
  initialData?: CreateFormData;
  isEdit?: boolean;
}
