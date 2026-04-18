import { apiService } from "@/services/api";

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
