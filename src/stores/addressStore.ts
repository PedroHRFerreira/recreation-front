import axios from "axios";

export const getAddressByCep = async (cep: string) => {
  try {
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) return null;

    const response = await axios({
      method: "get",
      url: `https://viacep.com.br/ws/${cleanCep}/json/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.erro) {
      console.error("CEP não encontrado");
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Erro detalhado na busca de CEP:", error);
    return null;
  }
};
