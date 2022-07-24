import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { User } from "./users/entities/user.entity";
import { Product } from "./products/entities/product.entity";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'mongodb',
    url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/?authSource=admin`,
    database: 'food-api',
    entities: [User,Product],
    ssl: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize:true,
  }), ProductsModule, UsersModule, AuthModule,]
})
export class AppModule {

}
