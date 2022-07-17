import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }
  async validateUser(email: string, pass: string): Promise<any> {
    console.log(email, pass);
    const user = await this.usersService.findOne(email);
    console.log(user);
    if (user && user.password) {
      if (user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }
}
