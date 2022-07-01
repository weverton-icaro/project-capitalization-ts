import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/Users/repositories/IUsersReposiotry";
import { User } from "@shared/infra/typeorm/entities/Users";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
