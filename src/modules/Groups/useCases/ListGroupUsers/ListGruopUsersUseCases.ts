import { inject, injectable } from "tsyringe";

import { IGroupUsersRepository } from "@modules/Groups/repositories/IGroupUsersRepository";
import { Group } from "@shared/infra/typeorm/entities/GroupUsers";

@injectable()
export class ListGroupUsersUseCase {
  constructor(
    @inject("GroupUsersRepository")
    private groupUsersRepository: IGroupUsersRepository
  ) {}

  async execute(): Promise<Group[]> {
    const groups = await this.groupUsersRepository.list();

    return groups;
  }
}
