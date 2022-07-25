import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Animal, AnimalDocument } from "../entities/animal.schema";
import { Repository } from "typeorm";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Kind, KindDocument } from "../entities/kind.schema";

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
    @InjectModel(Kind.name) private kindModel: Model<KindDocument>
  ) {
  }

  async findAll(): Promise<Animal[]> {

    const kind = await this.kindModel.create({
      name: "test"
    });
    await this.animalModel.create({
      name: "Dog",
      kinds: [{ name: "testtt", imagePath:"asdasd" }]
    });


    console.log(await this.animalModel.findOneAndUpdate({'kinds._id': "62ddde2f0ffa124737f16572"},{ "kinds.$": { name:"hellö" }}))


    return await this.animalModel.find().exec();
  }


  async findOne(id: number): Promise<Animal> | null {
    return this.animalModel.findById(id);
  }

  async getKindOfAnimals(number: number) {

  }
}
