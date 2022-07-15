import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthUseCase } from "./AuthUseCase";

export class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, cpf } = request.body;

    const authUserUseCase = container.resolve(AuthUseCase);

    const token = await authUserUseCase.execute({ cpf, password });

    return response.status(200).json(token);
  }
}
