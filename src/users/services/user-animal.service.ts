import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../entities/user.entity";
import { AddAnimalDto, RemoveAnimalDTO } from "../dto/add-animal-dto";
import { UserAnimals } from "../entities/user-animals.entity";
import { KindService } from "../../animal/services/kind.service";
import { UsersService } from "./users.service";
import { Model, Types } from "mongoose";

export class UserAnimalService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
              private readonly userService: UsersService,
              private readonly kindService: KindService) {
  }

  async getAnimals(reqUser):Promise<UserAnimals[]> {
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();
    return user.userAnimals
  }

  async addAnimal(reqUser, addAnimalDto: AddAnimalDto):Promise<UserAnimals[]> {
    const kind = await this.kindService.findOne(addAnimalDto.kind);
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();

    user.userAnimals.push({name:addAnimalDto.name,photo:addAnimalDto.photo,gender:addAnimalDto.gender,kind:kind._id });
    await user.save();
    console.log(user.userAnimals);
    return user.userAnimals

  }

  async removeAnimal(reqUser, animalId):Promise<UserAnimals[]> {
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();
    user.userAnimals.pull(animalId);
    await user.save();
    console.log(user.userAnimals);
    return user.userAnimals
  }
}