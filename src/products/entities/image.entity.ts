import { Column } from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";

export class ProductImage {

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  width: string;

  @IsString()
  @IsNotEmpty()
  src: string;
}
