export interface ICreateUserDTO {
  id?: number;

  name: string;

  cpf: string;

  email: string;

  password: string;

  phone: string;

  birth_date: Date;

  sex: string;

  active: boolean;

  blocked: boolean;

  term_of_acceptance?: boolean;

  token?: string;

  token_created_at?: Date;

  deleted_wallet_at?: number;

  address: number;

  group: number;
}
