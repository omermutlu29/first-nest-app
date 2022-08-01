import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Breed, BreedDocument } from "../entities/breed.entity";
import { CreateBreedDto } from "../dto/create-breed.dto";


@Injectable()
export class BreedService {
  constructor(@InjectModel(Breed.name) private readonly BreedModel: Model<BreedDocument>) {
  }

  async create(animalId: string, createBreedDto: CreateBreedDto): Promise<Breed> {
    return await this.BreedModel.create({ ...createBreedDto, animal: animalId });
  }

  async findAll(): Promise<Breed[]> {
    return await this.BreedModel.find({}).exec();
  }

  async findOne(id: string): Promise<Breed> {
    return await this.BreedModel.findById(id).exec();
  }

  async findByAnimalId(animalId: string): Promise<Breed[]> {
    return await this.BreedModel.find({ animal: animalId }).exec();
  }
}
