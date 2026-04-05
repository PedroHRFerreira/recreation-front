import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    image: "/images/image-teste.png",
    title: "Meu titulo",
    description: "Descricao da card",
    type: "landing_page",
    status: "ativo",
    formData: {
      name: "Meu titulo",
      businessType: "Restaurante",
      description: "Landing page promocional para restaurante",
      style: "moderno",
      colorPrimary: "#ff3d7f",
      colorSecondary: "#ff1a6e",
      sections: ["hero", "about", "contact"],
    },
  },
  {
    id: 2,
    image: "/images/image-teste.png",
    title: "Meu titulo 2",
    description: "Descricao da card 2",
    type: "design",
    status: "ativo",
    formData: {
      name: "Meu titulo 2",
      businessType: "Tecnologia",
      description: "Peca visual para campanha digital",
      style: "minimalista",
      colorPrimary: "#2d5a27",
      colorSecondary: "#ffffff",
      sections: [],
    },
  },
  {
    id: 3,
    image: "/images/image-teste.png",
    title: "Meu titulo 3",
    description: "Descricao da card 3",
    type: "landing_page",
    status: "desativo",
    formData: {
      name: "Meu titulo 3",
      businessType: "Moda",
      description: "Pagina de lancamento de colecao",
      style: "criativo",
      colorPrimary: "#7f56d9",
      colorSecondary: "#f4ebff",
      sections: ["hero", "services", "cta", "footer"],
    },
  },
  {
    id: 4,
    image: "/images/image-teste.png",
    title: "Meu titulo 4",
    description: "Descricao da card 4",
    type: "design",
    status: "ativo",
    formData: {
      name: "Meu titulo 4",
      businessType: "E-commerce",
      description: "Criativo para campanha de produto",
      style: "elegante",
      colorPrimary: "#111111",
      colorSecondary: "#f5f5f5",
      sections: [],
    },
  },
];

export function getProjects() {
  return projects;
}

export function getProjectById(projectId?: string) {
  if (!projectId) {
    return null;
  }

  return projects.find((project) => project.id === Number(projectId)) ?? null;
}
