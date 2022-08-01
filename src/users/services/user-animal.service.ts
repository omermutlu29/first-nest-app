import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../entities/user.entity";
import { AddAnimalDto } from "../dto/user-animal-dto";
import { UserAnimals } from "../entities/user-animals.entity";
import { BreedService } from "../../animal/services/breed.service";
import { UsersService } from "./users.service";
import { Model } from "mongoose";

export class UserAnimalService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
              private readonly userService: UsersService,
              private readonly BreedService: BreedService) {
  }

  async getAnimals(reqUser):Promise<UserAnimals[]> {
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();
    return user.userAnimals
  }

  async addAnimal(reqUser, addAnimalDto: AddAnimalDto):Promise<UserAnimals[]> {
    const Breed = await this.BreedService.findOne(addAnimalDto.Breed);
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();

    user.userAnimals.push({name:addAnimalDto.name,photo:addAnimalDto.photo,gender:addAnimalDto.gender,Breed:Breed._id });
    await user.save();
    return user.userAnimals

  }

  async removeAnimal(reqUser, animalId):Promise<UserAnimals[]> {
    const user = await this.userModel.findOne({ email: reqUser.username }).exec();
    user.userAnimals.pull(animalId);
    await user.save();
    return user.userAnimals
  }
}
