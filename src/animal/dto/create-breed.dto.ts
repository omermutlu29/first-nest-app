import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateBreedDto {
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  photo:string
}
