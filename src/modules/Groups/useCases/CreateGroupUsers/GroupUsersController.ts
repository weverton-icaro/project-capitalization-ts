import { Request, Response } from "express";
import { container } from "tsyringe";

import { GroupUsersUseCases } from "./GroupUsersUseCases";

export class GroupUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createGroupUsersUseCases = container.resolve(GroupUsersUseCases);

    await createGroupUsersUseCases.execute({
      description,
    });

    return response.status(201).send();
  }
}
