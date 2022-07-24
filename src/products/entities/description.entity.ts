import { Column } from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";

export class ProductDescription {
  @IsNotEmpty()
  @IsString()
  lang: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}
