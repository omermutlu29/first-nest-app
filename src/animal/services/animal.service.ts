import { Injectable } from "@nestjs/common";
import { Animal } from "../entities/animal.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel("Animal")
    private readonly animalModel: Model<Animal>
  ) {
  }

  async findAll() {

    const animal = new Animal();
    animal.name='Dog';
    await this.animalModel.create(animal)

    /*const result = await this.animalModel.find({}).exec();
    return result.map(item => {
      return {
        _id: item._id,
        name: item.name,
        kinds: item.kinds.map((kindItem) => {
          return {
            _id: kindItem.id,
            name: kindItem.name,
            photo: kindItem.photo
          };

        })
      };
    });*/
  }


  async findOne(id: string) {

  }

  async getKindOfAnimals(id: string) {

  }
}
