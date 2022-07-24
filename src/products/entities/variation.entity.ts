import { ProductImage } from "./image.entity";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ProductVariation {
  @IsNotEmpty()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => ProductImage)
  img: ProductImage[];

  @IsNotEmpty()
  @IsArray()
  attrs: string[];
}
