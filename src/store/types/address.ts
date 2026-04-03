export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}
