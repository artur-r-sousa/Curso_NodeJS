import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagService {

  async execute(name: string) {
    const tagsRepo = getCustomRepository(TagsRepositories);

    if(!name) {
      throw new Error("Incorrect name");
    }

    const tagAlreadyExists = await tagsRepo.findOne({
      name
    })

    if(tagAlreadyExists) {
      throw new Error("Tag Already exists");
    }

    const tag = tagsRepo.create({
      name
    });

    await tagsRepo.save(tag);

    return tag;
  }
}

export { CreateTagService }