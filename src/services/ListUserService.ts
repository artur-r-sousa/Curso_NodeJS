import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"


class ListUserService {

  async execute() {
    const usersRepo = getCustomRepository(UsersRepositories);

    const users = await usersRepo.find();

    return classToPlain(users);
  }

}

export { ListUserService }