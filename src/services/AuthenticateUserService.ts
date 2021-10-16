import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UserRepositories"

interface IAuthenticateRequest {
  
  email: string,
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)
    
    const user = await usersRepositories.findOne({
      email
    });
  
    if(!user){
      throw new Error("Email or Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email or Password incorrect")
    }

    const token = sign({
      email: user.email,      
    }, "32f852495ff866422020fbbfd8702b18", {
      subject: user.id,
      expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService }