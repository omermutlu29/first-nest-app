import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  { ObjectId } from "mongoose";
import { ObjectIdColumn } from "typeorm";

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @ObjectIdColumn()
  _id: ObjectId;

  @Prop()
  name: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
