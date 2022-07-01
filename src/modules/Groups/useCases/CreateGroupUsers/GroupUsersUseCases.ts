import { inject, injectable } from "tsyringe";

import { ICreateGroupUsersDTO } from "../../dtos/ICreateGroupDTO";
import { IGroupUsersRepository } from "../../repositories/IGroupUsersRepository";

@injectable()
export class GroupUsersUseCases {
  constructor(
    @inject("GroupUsersRepository")
    private groupUsers: IGroupUsersRepository
  ) {}

  async execute({ description }: ICreateGroupUsersDTO): Promise<void> {
    await this.groupUsers.create({ description });
  }
}
