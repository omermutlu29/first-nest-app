import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from "./constants";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./controllers/auth.controller";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60m' },
  }),],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,JwtStrategy, /*{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },*/],
})
export class AuthModule {}
