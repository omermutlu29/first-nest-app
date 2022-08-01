import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform, Type } from "class-transformer";
import mongoose from "mongoose";
import { Animal } from "./animal.entity";

export type BreedDocument = Breed & Document;

@Schema()
export class Breed {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Breed.name })
  @Type(() => Animal)
  animal: Animal;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
