import { ConflictException, Injectable } from "@nestjs/common";
import { User, UserDocument } from "../entities/user.entity";
import { hash } from "argon2";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "../dto/user-dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name)
              private readonly userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<Object> {

    if (await this.userModel.find({email:createUserDto.email}).count().exec() > 0) {
      throw new ConflictException("Email is taken before");
    }
    createUserDto.password = await hash(createUserDto.password);
    return await this.userModel.create(createUserDto);

  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: username }).exec();
  }

  async findOneById(id:string): Promise<User | undefined>{
    return this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({});
  }



}
