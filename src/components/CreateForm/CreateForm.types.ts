import type {
  GenerationType,
  CreateFormData,
} from "@/templates/Create/Create.types";

export interface CreateFormTypes {
  generationType: GenerationType;
  onGenerate: (data: CreateFormData) => void;
  initialData?: CreateFormData;
}
