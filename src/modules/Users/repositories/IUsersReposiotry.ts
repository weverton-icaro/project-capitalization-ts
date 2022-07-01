import { User } from "@shared/infra/typeorm/entities/Users";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  findByPhone(phone: string): Promise<User>;
  findByName(name: string): Promise<User>;
  findAll(): Promise<User[]>;
}
