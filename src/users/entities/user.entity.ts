import { Column, Entity,  ObjectIdColumn } from "typeorm";
import { IsEmail, IsString } from "class-validator";

@Entity()
export class User {

  @ObjectIdColumn()
  id: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isDisabled: boolean;

}
