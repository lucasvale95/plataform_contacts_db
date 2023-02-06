import { IUserRequest, IUserResponse } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const createUserService = async ({
  name,
  email,
  phone,
  password,
}: IUserRequest): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    email,
  });

  if (findUser) {
    throw new AppError("User alredy exist", 400);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
