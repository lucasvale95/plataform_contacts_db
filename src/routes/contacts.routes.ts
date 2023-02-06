import { Router } from "express";
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
import validadeUpdateMiddleware from "../middleware/validadeUpdate.middleware";

const contactsRoutes = Router();

contactsRoutes.post('', ensureAuthMiddleware, createContactController);
contactsRoutes.get('', ensureAuthMiddleware, listContactsController);
contactsRoutes.patch("/:id", ensureAuthMiddleware, validadeUpdateMiddleware, updateContactController);
contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);


export default contactsRoutes;