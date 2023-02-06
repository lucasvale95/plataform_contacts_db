import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { Contact } from "../../entities/contacts.entity";

const deleteContactService = async (
  id: string,
  loggedUser: any
): Promise<void> => {
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

  await contactRepository.delete({id: id});

  const contactResponse = await contactRepository.findOneBy({
    id: id
  });


  return 
};

export default deleteContactService;