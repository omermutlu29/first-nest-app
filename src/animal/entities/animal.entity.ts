import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId, Types } from "mongoose";
import { Address, AddressSchema } from "../../users/entities/address.entity";
import { Transform, Type } from "class-transformer";
import { Kind, KindSchema } from "./kind.entity";
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
