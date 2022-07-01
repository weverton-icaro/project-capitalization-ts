import { container } from "tsyringe";

import { IAddressRepository } from "@modules/Address/repositories/IAddressRepository";
import { AddressRepository } from "@modules/Address/repositories/implementations/AddressRepository";
import { IGroupUsersRepository } from "@modules/Groups/repositories/IGroupUsersRepository";
import { GroupUsersRepository } from "@modules/Groups/repositories/implementations/GroupUsersRepository";
import { UsersRepository } from "@modules/Users/repositories/implementations/UsersRepository";
// import { IUsersRepository } from "@modules/Users/repositories/IUsersReposiotry";

container.registerSingleton<IAddressRepository>(
  "AddressRepository",
  AddressRepository
);

container.registerSingleton("UsersRepository", UsersRepository);

container.registerSingleton<IGroupUsersRepository>(
  "GroupUsersRepository",
  GroupUsersRepository
);
