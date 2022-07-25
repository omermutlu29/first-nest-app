import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Kind, KindDocument, KindSchema } from "./kind.schema";

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @Prop()
  name: string;

  @Prop({ required: true, type: [KindSchema] })
  kinds: [Kind];
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
