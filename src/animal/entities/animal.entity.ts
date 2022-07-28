import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {

  @Prop()
  name: string;

  @Prop()
  kinds:[]

}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
