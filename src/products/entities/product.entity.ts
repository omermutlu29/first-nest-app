import { Column, Entity, Index, ObjectIdColumn } from "typeorm";
import { ProductDescription } from "./description.entity";
import { ProductImage } from "./image.entity";
import { ProductVariation } from "./variation.entity";
import { IsArray, IsNotEmpty, IsString, Validate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@Entity()
export class Product {
  @ObjectIdColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  code: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  lName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  dep: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  cat: string;

  @Column()
  @IsArray()
  desc: ProductDescription[];

  @Column()
  @Type(() => ProductImage)
  img: ProductImage[];

  @Column()
  attrs: string[];

  //secondary attributes not to be
  @Column()
  sAttrs: string[];

  @Column()
  @Type(() => ProductVariation)
  vars: ProductVariation[];


}
