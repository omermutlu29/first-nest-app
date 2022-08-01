import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Kind, KindDocument } from "../entities/kind.entity";
import { CreateKindDto } from "../dto/create-kind.dto";

@Injectable()
export class KindService {
  constructor(@InjectModel(Kind.name) private readonly kindModel: Model<KindDocument>) {
  }

  async create(animalId: string, createKindDto: CreateKindDto): Promise<Kind> {
    return await this.kindModel.create({ ...createKindDto, animal: animalId });
  }

  async findAll(): Promise<Kind[]> {
    return await this.kindModel.find({}).exec();
  }

  async findOne(id: string): Promise<Kind> {
    return await this.kindModel.findById(id).exec();
  }

  async findByAnimalId(animalId: string): Promise<Kind[]> {
    return await this.kindModel.find({ animal: animalId }).exec();
  }
}
