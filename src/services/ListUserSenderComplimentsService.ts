import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSenderComplimentsService {

  async execute(user_id: string){
    const complimentsRepo = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepo.find({
      where: {
        user_sender: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments;
  }

}

export { ListUserSenderComplimentsService }
