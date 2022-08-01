import { IsEmail } from "class-validator";

export class UpdateUserDto {
  @IsEmail()
  email: string;

  password: string;
  firstName?: string;
  lastName?: string;
}
