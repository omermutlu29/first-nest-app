import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./../dto/auth.dto";
import * as argon from "argon2";
import { UsersService } from "../../users/services/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              private jwtService: JwtService
  ) {
  }


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const pwMatches = await argon.verify(user.password, pass);
      if (pwMatches) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
    return null;
  }

  async login(user: AuthDto) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
