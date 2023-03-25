export interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    company: ICompany;
    website: string;
}

export interface IAddress{
    city: string;
}

export interface ICompany{
    name: string;
    catchPhrase: string
}