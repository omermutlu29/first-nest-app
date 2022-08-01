import { IsNotEmpty, IsString } from "class-validator";

export class AddAnimalDto {
  @IsNotEmpty()
  @IsString()
  Breed: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  photo: string;
}
