import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { User } from "./users/entities/user.entity";
import { Product } from "./products/entities/product.entity";
const dbUrl = `mongodb://root:${encodeURIComponent('Omer%402015')}@localhost:27017/?authSource=admin`;
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: dbUrl,
    database: 'food-api',
    entities: [User,Product],
    ssl: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize:true,

  }), ProductsModule, UsersModule, AuthModule]
})

export class AppModule {

}
