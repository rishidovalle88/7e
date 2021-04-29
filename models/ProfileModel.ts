export interface Address {
    cep: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    city: string;
    uf: string;
}

export interface Account {
    username: string;
    fisrtname: string;
    lastname: string;
    email: string;
    phone: string;
    cellphone: string;
    cpfCnpj: string;
    password?: string;
}