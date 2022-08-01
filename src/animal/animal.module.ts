import { Module } from "@nestjs/common";
import { AnimalController } from "./controllers/animal.controller";
import { AnimalService } from "./services/animal.service";
import { Animal, AnimalSchema } from "./entities/animal.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { KindController } from "./controllers/kind.controller";
import { KindService } from "./services/kind.service";
import { Kind, KindSchema } from "./entities/kind.entity";


@Module({
  imports: [MongooseModule.forFeature([
    { name: Animal.name, schema: AnimalSchema },
    { name: Kind.name, schema: KindSchema },
    ])],
  controllers: [AnimalController,KindController],
  providers: [AnimalService,KindService],
  exports:[KindService]
})
export class AnimalModule {
}
