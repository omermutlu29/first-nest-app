import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AnimalService } from "../services/animal.service";
import { CreateAnimalDto } from "../dto/create-animal.dto";
import { Animal } from "../entities/animal.entity";

@Controller("animal")
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {
  }

  @Post()
  async create(@Body() animalDTO: CreateAnimalDto) : Promise<Animal>{
    return await this.animalService.create(animalDTO)
  }

  @Get()
  async findAll(): Promise<Animal[]> {
    return await this.animalService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string):Promise<Animal | null> {
    return await this.animalService.findOne(id);
  }


}
