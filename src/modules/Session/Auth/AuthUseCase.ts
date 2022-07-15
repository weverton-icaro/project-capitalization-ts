import { compare } from "bcrypt";
import auth from "conf/auth";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/Users/repositories/IUsersReposiotry";
import { AppError } from "@shared/errors/AppErrors";
import { invalidDataSession } from "@shared/errors/Messages";

interface IRequest {
  cpf: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    cpf: string;
  };
  token: string;
}

@injectable()
export class AuthUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ cpf, password }: IRequest): Promise<IResponse> {
    // Usuário Existe
    const user = await this.usersRepository.findByCpf(cpf);

    if (!user) {
      throw new AppError(invalidDataSession, 401);
    }

    // Senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError(invalidDataSession, 401);
    }

    // Gerar jsonwebtoken
    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expires_in_token,
    });

    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        cpf: user.cpf,
      },
    };

    return tokenResponse;
  }
}
