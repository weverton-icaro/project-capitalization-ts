import { Group } from "@shared/infra/typeorm/entities/GroupUsers";

import { ICreateGroupUsersDTO } from "../dtos/ICreateGroupDTO";

export interface IGroupUsersRepository {
  create({ description }: ICreateGroupUsersDTO): Promise<void>;
  list(): Promise<Group[]>;
}
