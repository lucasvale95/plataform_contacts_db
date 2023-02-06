import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

const updateUserController = async (req: Request, res: Response) => {
  const { name, email, phone, password }: IUserUpdate = req.body;
  const id: string = req.params.id;
  const loggedUser = req.user;
  const updatedUser = await updateUserService(
    name,
    email,
    password,
    phone,
    id,
    loggedUser
  );

  return res.status(200).json(instanceToPlain(updatedUser));
};


export {
  createUserController,
  listUsersController,
  updateUserController
};
