export type GenerationType = "design" | "landing-page" | null;

export interface CreateFormData {
  name: string;
  businessType: string;
  description: string;
  style: string;
  colorPrimary: string;
  colorSecondary: string;
  sections: string[];
}
