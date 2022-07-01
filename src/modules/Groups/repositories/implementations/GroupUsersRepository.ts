import { getRepository, Repository } from "typeorm";

import { Group } from "@shared/infra/typeorm/entities/GroupUsers";

import { ICreateGroupUsersDTO } from "../../dtos/ICreateGroupDTO";
import { IGroupUsersRepository } from "../IGroupUsersRepository";

export class GroupUsersRepository implements IGroupUsersRepository {
  private repository: Repository<Group>;

  constructor() {
    this.repository = getRepository(Group);
  }

  async create({ description }: ICreateGroupUsersDTO): Promise<void> {
    const group = this.repository.create({
      description,
    });

    await this.repository.save(group);
  }

  async list(): Promise<Group[]> {
    const group = await this.repository.find();

    return group;
  }
}
