import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/Users/dtos/ICreateUserDTO";
import { User } from "@shared/infra/typeorm/entities/Users";

import { IUsersRepository } from "../IUsersReposiotry";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    cpf,
    email,
    password,
    phone,
    birth_date,
    sex,
    address,
    group,
    active,
    blocked,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      cpf,
      email,
      password,
      phone,
      birth_date,
      sex,
      address_id: address,
      group_user_id: group,
      active,
      blocked,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne(email);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = await this.repository.findOne(cpf);
    return user;
  }

  async findByPhone(phone: string): Promise<User> {
    const user = await this.repository.findOne(phone);
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne(name);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UsersRepository };
