import { Module } from "@nestjs/common";
import { AnimalController } from "./controllers/animal.controller";
import { AnimalService } from "./services/animal.service";
import { Animal, AnimalSchema } from "./entities/animal.entity";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [MongooseModule.forFeature([
    { name: Animal.name, schema: AnimalSchema },
    ])],
  controllers: [AnimalController],
  providers: [AnimalService]
})
export class AnimalModule {
}
