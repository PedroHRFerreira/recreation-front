import { create } from 'zustand';

export interface ProfileData {
    name: string,
    phone: string, 
    address: {
        cep: string,
        logradouro: string, 
        bairro: string,
        localidade: string,
        uf: string,
        numero: string;
    };
}

interface ProfileStore {
    profile: ProfileData;
    isLoading: boolean;
}