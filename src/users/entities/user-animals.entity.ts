import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Transform, Type } from "class-transformer";
import mongoose, { Document } from "mongoose";
import { Breed } from "../../animal/entities/breed.entity";
import { Address } from "./address.entity";

export type UserAnimalsDocument = Address & Document;


@Schema()
export class UserAnimals {
  /*@Transform(({ value }) => value.toString())
    _id: string;*/

  @Prop()
  name:string;

  @Prop()
  gender:string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Breed.name })
  @Type(() => Breed)
  Breed: Breed;

  @Prop()
  photo:string;

}

export const UserAnimalsSchema = SchemaFactory.createForClass(UserAnimals);
