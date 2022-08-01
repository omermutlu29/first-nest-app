import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateKindDto } from "./create-kind.dto";
import { Type } from "class-transformer";

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  name:string;

  @ValidateNested({ each: true })
  @Type(() => CreateKindDto)
  kinds: CreateKindDto[]
}
