import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listContactsService = async (id: string): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id
  })

  if (!user) {
    throw new AppError("User not exist", 404);
  } 

  const contacts = await contactRepository.find({
    where: {
      user: {
        id: id
      }
    }
  });

  return contacts;
};

export default listContactsService;
