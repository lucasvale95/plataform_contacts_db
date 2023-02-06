import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IContactRequest, IContactResponse } from "../../interfaces/contacts";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";

const createContactService = async ({
  name,
  email,
  phone,
  age
}: IContactRequest, id: string): Promise<IContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({
    id
  })

  if (!user) {
    throw new AppError("User not exist", 404);
  } 

  const findContact = await contactRepository.findOneBy({
    email,
    name,
    phone
  });

  if (findContact) {
    throw new AppError("Contact alredy exist", 400);
  }


  const contact = contactRepository.create({
    name,
    email,
    phone,
    age,
    user
  });

  await contactRepository.save(contact);

  return contact
};

export default createContactService;
