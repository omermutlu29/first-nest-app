import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Transform, Type } from "class-transformer";
import mongoose, { Document } from "mongoose";
import { Kind } from "../../animal/entities/kind.entity";
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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Kind.name })
  @Type(() => Kind)
  kind: Kind;

  @Prop()
  photo:string;

}

export const UserAnimalsSchema = SchemaFactory.createForClass(UserAnimals);
