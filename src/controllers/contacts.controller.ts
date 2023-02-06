import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";
import createContactService from "../services/contacts/createContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContacts.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contact: IContactRequest = req.body;
  const id = req.user.id;
  const createdContact = await createContactService(contact, id);
  return res.status(201).json(createdContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const contacts = await listContactsService(id);
  return res.json(instanceToPlain(contacts));
};

const updateContactController = async (req: Request, res: Response) => {
  const { name, email, phone, age }: IContactUpdate = req.body;
  const id: string = req.params.id;
  const loggedUser = req.user;
  const updatedContact = await updateContactService(
    name,
    email,
    age,
    phone,
    id,
    loggedUser
  );

  return res.status(200).json(updatedContact);
};

const deleteContactController = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const loggedUser = req.user;
    const deleteContact = await deleteContactService(
      id,
      loggedUser
    );
  
    return res.status(204).json(deleteContact);
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController
};