import { hash } from "bcrypt";
import moment from "moment-timezone";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/Users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/Users/repositories/IUsersReposiotry";
import { AppError } from "@shared/errors/AppErrors";

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
      throw new AppError(`Email existente em nossa base de dados.`);
    }

    if (await this.userRepository.findByEmail(email)) {
      throw new AppError(`CPF existente em nossa base de dados.`);
    }

    if (await this.userRepository.findByPhone(phone)) {
      throw new AppError("Telefone existente em nossa base de dados.");
    }

    if (!nameComplet[1]) {
      throw new AppError("Infome o nome completo");
    }

    if (nowBirth.diff(dateBirth, "years") < 16) {
      throw new AppError("Somente para maiores de 16 anos!");
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
