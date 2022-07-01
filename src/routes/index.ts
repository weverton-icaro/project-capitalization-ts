import { Router } from "express";

import { groupUserRouter } from "./group.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/", userRoutes);
router.use("/", groupUserRouter);

export { router };
