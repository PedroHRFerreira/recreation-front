import { apiService } from "@/lib/api";
import type { Address, ViaCepResponse } from "../types/address";

export async function fetchAddressByCep(cep: string): Promise<Address | null> {
  const cleanCep = cep.replace(/\D/g, "");

  if (cleanCep.length !== 8) {
    return null;
  }

  try {
    const data = await apiService.get<ViaCepResponse>(
      `https://viacep.com.br/ws/${cleanCep}/json/`,
    );

    if (data.erro) {
      return null;
    }

    return {
      postalCode: data.cep,
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return null;
  }
}
