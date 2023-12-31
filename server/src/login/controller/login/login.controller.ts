import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { loginDto } from '../dtos/login.dto';
import { Response } from 'express';
import { generateToken } from 'src/helpers/auth.helper';
import { UserResolver } from 'src/resolver/user/user.resolver';

@Controller('login')
export class LoginController {
  constructor(@Inject(UserResolver) private UserResolver: UserResolver) {}
  @UsePipes(new ValidationPipe())
  @Get()
  keepUp(@Res() res: Response) {
    res.send('login');
  }
  @Post()
  async loginUser(@Body() user: loginDto, @Res() res: Response) {
    //isauth not used but will reset headers
    const dbRes = await this.UserResolver.getUser(user.email);
    const dbUser = {
      username: dbRes.username,
      email: dbRes.email,
      number: dbRes.number,
    };
    const token = await generateToken(dbUser);
    if (!token) return res.status(400).json({ message: 'unauthorized' });
    res.status(200).json({ message: 'Login successful', client_token: token });
  }
}
