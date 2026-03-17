import { GenerationType } from "@/enum/create.enum";

export type { GenerationType };
export type GenerationTypeOrNull = GenerationType | null;

export interface CreateFormData {
  name: string;
  businessType: string;
  description: string;
  style: string;
  colorPrimary: string;
  colorSecondary: string;
  sections: string[];
}
