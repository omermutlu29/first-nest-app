import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./controllers/users.controller";
import { User, UserSchema } from "./entities/user.entity";
import { UserAnimalController } from "./controllers/user-animal.controller";
import { UserAnimalService } from "./services/user-animal.service";
import { AnimalModule } from "../animal/animal.module";

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },//documentleri create eder
  ]),AnimalModule],
  controllers: [UsersController,UserAnimalController],
  providers: [UsersService,UserAnimalService],
  exports: [UsersService]
})
export class UsersModule {
}
