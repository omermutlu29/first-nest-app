import { Module } from "@nestjs/common";
import { AnimalController } from "./controllers/animal.controller";
import { AnimalService } from "./services/animal.service";
import { Animal, AnimalSchema } from "./entities/animal.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { BreedService } from "./services/breed.service";
import { Breed, BreedSchema } from "./entities/breed.entity";
import { BreedController } from "./controllers/kind.controller";


@Module({
  imports: [MongooseModule.forFeature([
    { name: Animal.name, schema: AnimalSchema },
    { name: Breed.name, schema: BreedSchema },
    ])],
  controllers: [AnimalController,BreedController],
  providers: [AnimalService,BreedService],
  exports:[BreedService]
})
export class AnimalModule {
}
