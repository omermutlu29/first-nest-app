import { ConflictException, Injectable } from "@nestjs/common";
import { User, UserDocument } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { hash } from "argon2";
import { Model } from "mongoose";
import { Post, PostDocument } from "../entities/post.entity";
import { Category, CategoryDocument } from "../entities/category.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name)
              private readonly userModel: Model<UserDocument>,
              @InjectModel(Post.name)
              private readonly postModel: Model<PostDocument>,
              @InjectModel(Category.name)
              private readonly categoryModel: Model<CategoryDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<Object> {

    const category = await this.categoryModel.create(new Category('Test'));
    if (await this.userModel.find({email:createUserDto.email}).count().exec() > 0) {
      throw new ConflictException("Email is taken before");
    }
    createUserDto.password = await hash(createUserDto.password);
    const user =  await this.userModel.create(createUserDto);
    const createdPost = new this.postModel({
      ...{ content:'asdasd', title: 'asdasd' },
      categories : [
        category._id
      ],
      author:user,
    });
    await createdPost.populate('categories');
    await createdPost.save();

    return this.postModel.find({}).populate('categories').populate('author');

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
