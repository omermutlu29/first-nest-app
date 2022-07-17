import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isDisabled: boolean;

  @ManyToMany(type => Product) @JoinTable({ name: "favorite_products" })
  products: Product[];

  @ManyToMany(type => Product) @JoinTable({ name: "orders" })
  orders: Product[];

}
