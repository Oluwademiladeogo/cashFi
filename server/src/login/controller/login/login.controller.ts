import {
  Body,
  Controller,
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
    if (!token)
      throw new HttpException(
        'Error with authorisation',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    res.header('Authorization', `Bearer ${token}`);
    res.header('Content-Type', 'application/json');
    res.status(200).send(true);
  }
}
