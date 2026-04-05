import type { CreateFormData } from "@/templates/Create/Create.types";

export type ProjectType = "landing_page" | "design";
export type ProjectStatus = "ativo" | "desativo";

export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  formData: CreateFormData;
}
