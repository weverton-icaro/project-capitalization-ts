import { Router } from "express";

import { GroupUsersController } from "@modules/Groups/useCases/CreateGroupUsers/GroupUsersController";
import { ListGroupUsersController } from "@modules/Groups/useCases/ListGroupUsers/ListGroupUsersController";

const groupUserRouter = Router();

const groupUserController = new GroupUsersController();
const listGroupUsersController = new ListGroupUsersController();

groupUserRouter.post("/api/group/user", groupUserController.handle);
groupUserRouter.get("/api/group/user", listGroupUsersController.handle);

export { groupUserRouter };
