import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { KindService } from "../services/kind.service";
import { CreateKindDto } from "../dto/create-kind.dto";
import { Kind } from "../entities/kind.entity";

@Controller("kind")
export class KindController {
  constructor(private readonly kindService: KindService) {
  }

  @Post(":animalId")
  async create(@Param('animalId') animalId:string , @Body() kindDto: CreateKindDto) : Promise<Kind>{
    return await this.kindService.create(animalId,kindDto)
  }

  @Get()
  async findAll(): Promise<Kind[]> {
    return await this.kindService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Kind> {
    return await this.kindService.findOne(id);
  }

  @Get("findByAnimalId/:animalId")
  async findByAnimalId(@Param('animalId') animalId:string): Promise<Kind[]>{
    return await this.kindService.findByAnimalId(animalId);
  }


}
