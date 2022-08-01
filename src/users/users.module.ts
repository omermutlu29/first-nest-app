import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./controllers/users.controller";
import { Post, PostSchema } from "./entities/post.entity";
import { Category, CategorySchema } from "./entities/category.entity";
import { User, UserSchema } from "./entities/user.entity";
import { UserAnimalController } from "./controllers/user-animal.controller";
import { UserAnimalService } from "./services/user-animal.service";
import { KindService } from "../animal/services/kind.service";
import { AnimalModule } from "../animal/animal.module";

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },//documentleri create eder
    { name: Post.name, schema: PostSchema },//documentleri create eder
    { name: Category.name, schema: CategorySchema },//documentleri create eder
  ]),AnimalModule],
  controllers: [UsersController,UserAnimalController],
  providers: [UsersService,UserAnimalService],
  exports: [UsersService]
})
export class UsersModule {
}
