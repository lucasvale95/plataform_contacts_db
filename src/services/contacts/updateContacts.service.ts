import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUserResponse } from "../../interfaces/users";
import { Contact } from "../../entities/contacts.entity";

const updateContactService = async (
  name: string | undefined,
  email: string | undefined,
  age: number | undefined,
  phone: string | undefined,
  id: string,
  loggedUser: any
): Promise<IUserResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: loggedUser.id,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contacts = await contactRepository.findOneBy({
    id: id
  });

  if (!contacts) {
    throw new AppError("Contact not found", 404);
  }


  await contactRepository.update(id, {
    name: name ? name : contacts.name,
    email: email ? email : contacts.email,
    phone: phone ? phone : contacts.phone,
    age: age ? age : contacts.age
  });

  const contactResponse = await contactRepository.findOneBy({
    id: id
  });


  return contactResponse!;
};

export default updateContactService;
