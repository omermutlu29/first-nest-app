import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateBreedDto } from "./create-breed.dto";
import { Type } from "class-transformer";

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  name:string;

  @ValidateNested({ each: true })
  @Type(() => CreateBreedDto)
  Breeds: CreateBreedDto[]
}
