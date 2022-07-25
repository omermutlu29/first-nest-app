import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { hash } from "argon2";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
              private readonly userRepository: Repository<User>) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await hash(createUserDto.password);
    let user = this.userRepository.create(createUserDto);
    user = await this.userRepository.save(user);
    return user;
  }

  async findOne(username: string): Promise<User | undefined> {
    console.log(await this.userRepository.findOneBy({ email: username }));
    return await this.userRepository.findOneBy({ email: username });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  hideIdAndPassword(user: User): User {
    delete user.id;
    delete user.password;
    return user;
  }


}
