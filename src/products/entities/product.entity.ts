import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  stock: number;

  @ManyToMany(type => User) @JoinTable({ name: "favorite_products" })
  users: User[];

  @ManyToMany(type => User) @JoinTable({ name: "orders" })
  orders: User[];


}
