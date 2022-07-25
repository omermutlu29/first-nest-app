import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type KindDocument = Kind & Document;

@Schema()
export class Kind {


  @Prop()
  name: string;
}

export const KindSchema = SchemaFactory.createForClass(Kind);
