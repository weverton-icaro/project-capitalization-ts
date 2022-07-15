import { hash } from "bcrypt";
import moment from "moment-timezone";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/Users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/Users/repositories/IUsersReposiotry";
import { AppError } from "@shared/errors/AppErrors";
import {
  ageNotAllowed,
  userCpfExists,
  userEmailExists,
  userNameIncomplet,
  userPhoneExists,
} from "@shared/errors/Messages";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    cpf,
    email,
    password,
    birth_date,
    phone,
    sex,
    address,
    group,
    active,
    blocked,
  }: ICreateUserDTO): Promise<void> {
    const nameComplet = name.split(/(?=[A-Z])/);
    const dateBirth = moment(birth_date, "DD/MM/YYYY");
    const nowBirth = moment().tz("America/Sao_Paulo");
    const birthDay = dateBirth.format("YYYY-MM-DD");

    if (await this.userRepository.findByCpf(cpf)) {
      throw new AppError(userEmailExists);
    }

    if (await this.userRepository.findByEmail(email)) {
      throw new AppError(userCpfExists);
    }

    if (await this.userRepository.findByPhone(phone)) {
      throw new AppError(userPhoneExists);
    }

    if (!nameComplet[1]) {
      throw new AppError(userNameIncomplet);
    }

    if (nowBirth.diff(dateBirth, "years") < 16) {
      throw new AppError(ageNotAllowed);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      cpf,
      email,
      password: passwordHash,
      phone,
      birth_date: new Date(birthDay),
      sex,
      address,
      group,
      active,
      blocked,
    });
  }
}
