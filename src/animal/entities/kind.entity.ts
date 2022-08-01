import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Type } from "class-transformer";
import mongoose from "mongoose";
import { Animal } from "./animal.entity";

export type KindDocument = Kind & Document;
@Schema()
export class Kind {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop({type:{type:mongoose.Schema.Types.ObjectId, ref: Kind}})
  @Type(() =>  Animal)
  animal: Animal;
}

export const KindSchema = SchemaFactory.createForClass(Kind);
