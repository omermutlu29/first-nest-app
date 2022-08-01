import { UserAnimalService } from "../services/user-animal.service";
import { AddAnimalDto } from "../dto/user-animal-dto";
import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { UserAnimals } from "../entities/user-animals.entity";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("user/animal")
export class UserAnimalController {
  constructor(private readonly userAnimalService: UserAnimalService) {
  }

  @Get()
  async getAnimals(@Req() req): Promise<UserAnimals[]> {
    const user = req.user;
    return await this.userAnimalService.getAnimals(user);

  }

  @Post()
  async addAnimal(@Body() addAnimalDto: AddAnimalDto, @Req() req): Promise<UserAnimals[]> {
    const user = req.user;
    return await this.userAnimalService.addAnimal(user, addAnimalDto);
  }

  @Delete(":animalId")
  async removeAnimal(@Param("animalId") animalId: string, @Req() req): Promise<UserAnimals[]> {
    const user = req.user;
    return await this.userAnimalService.removeAnimal(user, animalId);
  }
}
