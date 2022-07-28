import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AnimalService } from "../services/animal.service";

@Controller("animal")
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.animalService.findOne(id);
  }

  @Get("kinds/:id")
  getKindsOfAnimal(@Param("id") id: string) {
    return this.animalService.getKindOfAnimals(id);
  }


}
