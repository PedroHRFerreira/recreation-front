import type { ProjectType } from "@/store/types/project";

export interface SidebarFilter {
  label: string;
  value: "todos" | ProjectType;
}
