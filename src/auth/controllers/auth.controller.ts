import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./../guards/local-auth.guard";
import { AuthService } from "./../services/auth.service";
import { JwtAuthGuard } from "./../guards/jwt-auth.guard";
import { AuthDto } from "./../dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }


  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
