import { Router } from "express";

import { CreateUserController } from "@modules/Users/UseCases/CreateUser/CreateUserController";
import { ListUsersController } from "@modules/Users/UseCases/ListUsers/ListUsersController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/api/user", createUserController.handle);
userRoutes.get("/api/user", listUsersController.handle);

export { userRoutes };
