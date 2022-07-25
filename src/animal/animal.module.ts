import { Module } from "@nestjs/common";
import { AnimalController } from "./controllers/animal.controller";
import { AnimalService } from "./services/animal.service";
import { Animal, AnimalSchema } from "./entities/animal.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { Kind, KindSchema } from "./entities/kind.schema";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Animal.name, schema: AnimalSchema },
    { name: Kind.name, schema: KindSchema },
    ])],
  controllers: [AnimalController],
  providers: [AnimalService]
})
export class AnimalModule {
}
