/* Interface que define os dados de perfil do usuário*/

export interface UserProfile {
    id?: string;
    name: string;
    email: string;
    profileImage?: string;
    dataNascimento?: string;
    bio?: string;
    
}

export interface UploadResponse {
    imageURL: string;
    message?: string;
}