import { apiService } from "@/lib/api";

type UploadResponse = {
  url: string;
};

export const uploadUserAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await apiService.post<UploadResponse>(
      "/api/user/upload-avatar",
      formData,
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro no upload:", error.message);
      throw error;
    } else {
      console.error("Erro desconhecido:", error);
      throw new Error("Erro ao subir imagem");
    }
  }
};

export const getAddressByCep = async (cep: string) => {
  const cleanCep = cep.replace(/\D/g, "");
  if (cleanCep.length !== 8) return null;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await response.json();

    if (data.erro) {
      throw new Error("CEP não encontrado");
    }

    return {
      logradouro: data.logradouro,
      localidade: data.localidade,
      uf: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return null;
  }
};
