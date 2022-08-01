import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateKindDto {
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  photo:string
}
