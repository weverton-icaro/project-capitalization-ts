import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGroupUsersUseCase } from "./ListGruopUsersUseCases";

export class ListGroupUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGroupUsersUseCases = container.resolve(ListGroupUsersUseCase);

    const listAll = await listGroupUsersUseCases.execute();

    return response.status(200).json(listAll);
  }
}
