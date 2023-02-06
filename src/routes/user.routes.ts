import { Router } from "express";
import { createUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
import validadeUpdateMiddleware from "../middleware/validadeUpdate.middleware";

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', ensureAuthMiddleware, listUsersController);
userRoutes.patch("/:id", ensureAuthMiddleware, validadeUpdateMiddleware, updateUserController);


export default userRoutes;