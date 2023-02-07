import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listUsersService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id
  });

  if (!user) {
    throw new AppError("User not exist", 404);
  } 

  return user;
};

export default listUsersService;
