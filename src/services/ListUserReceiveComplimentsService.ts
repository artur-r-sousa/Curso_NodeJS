import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {

  async execute(user_id: string){
    const complimentsRepo = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepo.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tags"]
    })

    return compliments;
  }

}

export { ListUserReceiveComplimentsService }
