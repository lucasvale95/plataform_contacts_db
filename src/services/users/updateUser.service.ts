import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { IUserResponse } from "../../interfaces/users";

const updateUserService = async (
  name: string | undefined,
  email: string | undefined,
  phone: string | undefined,
  password: string | undefined,
  id: string,
  loggedUser: any
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    phone: phone ? phone : findUser.phone,
    password: password ? await hash(password, 10) : findUser.password,    
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};

export default updateUserService;
