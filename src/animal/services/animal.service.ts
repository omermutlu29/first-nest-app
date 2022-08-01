import { BadRequestException, Injectable } from "@nestjs/common";
import { Animal, AnimalDocument } from "../entities/animal.entity";
import { InjectModel } from "@nestjs/mongoose";
import  { Model,  Types } from "mongoose";
import { CreateAnimalDto } from "../dto/create-animal.dto";

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal.name)
    private readonly animalModel: Model<AnimalDocument>
  ) {
  }

  async create(animalDto: CreateAnimalDto): Promise<Animal> {
    return await this.animalModel.create(animalDto);
  }

  async findAll(): Promise<Animal[]> {
    return await this.animalModel.aggregate([
      {
        $lookup: {
          from: "kinds", // collection name in db
          localField: "_id",
          foreignField: "animal",
          as: "kinds"
        }
      }]).exec();
  }

  async findOne(id: string): Promise<Animal | null> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Requested id is invalid')
    }
    const animal = await this.animalModel.aggregate([ {
      $match: { "_id": new Types.ObjectId(id) }
    },{
      $lookup: {
        from: "kinds", // collection name in db
        localField: "_id",
        foreignField: "animal",
        as: "kinds"
      }
    }]).exec();
    return animal.length > 0 ? animal[0] : null;
  }
}
