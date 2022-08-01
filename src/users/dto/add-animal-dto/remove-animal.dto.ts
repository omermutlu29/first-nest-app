import { IsNotEmpty, IsString } from "class-validator";

export class RemoveAnimalDTO {
  @IsString()
  @IsNotEmpty()
  id:string
}
