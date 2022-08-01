import { IsNotEmpty, IsString } from "class-validator";

export class AddAnimalDto {
  @IsNotEmpty()
  @IsString()
  kind: string;

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
