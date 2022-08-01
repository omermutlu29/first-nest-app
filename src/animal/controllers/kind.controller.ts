import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { BreedService } from "../services/breed.service";
import { CreateBreedDto } from "../dto/create-breed.dto";
import { Breed } from "../entities/breed.entity";

@Controller("breed")
export class BreedController {
  constructor(private readonly BreedService: BreedService) {
  }

  @Post(":animalId")
  async create(@Param('animalId') animalId:string , @Body() BreedDto: CreateBreedDto) : Promise<Breed>{
    return await this.BreedService.create(animalId,BreedDto)
  }

  @Get()
  async findAll(): Promise<Breed[]> {
    return await this.BreedService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Breed> {
    return await this.BreedService.findOne(id);
  }

  @Get("findByAnimalId/:animalId")
  async findByAnimalId(@Param('animalId') animalId:string): Promise<Breed[]>{
    return await this.BreedService.findByAnimalId(animalId);
  }


}
