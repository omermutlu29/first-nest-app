import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";
import { Exclude, Transform, Type } from "class-transformer";
import { UserAnimals, UserAnimalsSchema } from "./user-animals.entity";

export type UserDocument = User & Document;

@Schema()
export class User {
  /*@Transform(({ value }) => value.toString())
    _id: string;*/

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;


  @Prop({type: [UserAnimalsSchema]})
  userAnimals: Types.DocumentArray<UserAnimals>
}

export const UserSchema = SchemaFactory.createForClass(User);
