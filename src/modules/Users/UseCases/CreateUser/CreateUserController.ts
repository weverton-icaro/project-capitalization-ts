import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAddressUseCase } from "@modules/Address/UseCases/CreateAddress/CreateAddressUseCase";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cpf,
      senha,
      sexo,
      nome,
      email,
      telefone,
      cep,
      cidade,
      ufSigla,
      complemento,
      group,
      data_nascimento,
      endereco_numero,
      numero,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const number = endereco_numero || numero;

    const address = await createAddressUseCase.execute({
      cep,
      number,
      complement: complemento,
      city: cidade,
      uf: ufSigla,
    });

    const user = await createUserUseCase.execute({
      name: nome,
      cpf,
      password: senha,
      sex: sexo,
      email,
      phone: telefone,
      birth_date: data_nascimento,
      address: Number(address.id),
      group,
      active: true,
      blocked: false,
    });

    return response
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user });
  }
}
