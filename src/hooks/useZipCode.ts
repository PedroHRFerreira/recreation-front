import { useCallback } from "react";
import { UseFormSetValue, FieldValues, Path } from "react-hook-form";
import { getAddressByCep } from "@/services/viacep";

interface AddressFields {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const useZipCode = <T extends FieldValues>(
  setValue: UseFormSetValue<T>,
) => {
  const handleZipCodeBlur = useCallback(
    async (cep: string) => {
      const cleanCep = cep.replace(/\D/g, "");

      if (cleanCep.length === 8) {
        try {
          const data: AddressFields = await getAddressByCep(cleanCep);

          const fields: (keyof AddressFields)[] = [
            "logradouro",
            "bairro",
            "localidade",
            "uf",
          ];

          fields.forEach((field) => {
            setValue(field as Path<T>, data[field] as any);
          });
        } catch (error) {
          console.error("Erro ao buscar endereço:", error);
        }
      }
    },
    [setValue],
  );

  return { handleZipCodeBlur };
};
