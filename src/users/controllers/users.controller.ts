import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from "@nestjs/common";
import MongooseClassSerializerInterceptor from "../../Interceptors/mongooseClassSerializer.interceptor";
import { UsersService } from "../services/users.service";
import { CreateUserDto, UpdateUserDto } from "../dto/user-dto";
import { User } from "../entities/user.entity";
@Controller("users")


@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Object> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    //return 'asd'
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    //return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    //return this.usersService.remove(+id);
  }
}
