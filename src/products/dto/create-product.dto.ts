import { ProductDescription } from "../entities/description.entity";
import { ProductImage } from "../entities/image.entity";
import { ProductVariation } from "../entities/variation.entity";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IsCategoryPattern } from "../validation/CustomTextLength";

export class CreateProductDto {

  @IsString()
  name: string;

  @IsString()
  lName: string;

  @IsString()
  @IsNotEmpty()
  code: string;


  @IsString()
  dep: string;

  @IsString()
  @IsCategoryPattern()
  cat: string;

  @IsNotEmpty()
  @IsArray()
  desc: ProductDescription[];

  @IsNotEmpty()
  @IsArray()
  img: ProductImage[];

  @IsNotEmpty()
  @IsArray()
  attrs: string[];

  @IsNotEmpty()
  @IsArray()
  sAttrs: string[];

  @ValidateNested()
  @Type(() => ProductVariation)
  vars: ProductVariation[];
}
