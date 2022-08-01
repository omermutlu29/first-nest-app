import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';

import { Transform, Type } from 'class-transformer';
import { User } from "./user.entity";
import { Category } from "./category.entity";

export type PostDocument = Post & Document;

@Schema()
export class Post {
  /*@Transform(({ value }) => value.toString())
    _id: string;*/
  @Prop()
  title: string;

  @Prop()
  content: string;

  /**BelongsTo not embedded*/
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  author: User;


  /**manytomany not embedded*/
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }] })
  @Type(() => Category)
  categories: [Category];
}

export const PostSchema = SchemaFactory.createForClass(Post);
