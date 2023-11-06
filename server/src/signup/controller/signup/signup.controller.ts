import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NewUserDto } from './dtos/NewUser.dto';
import { Response } from 'express';
import { UserResolver } from 'src/resolver/user/user.resolver';
@Controller('signup')
export class SignupController {
  constructor(private UsersResolver: UserResolver) {}
  @Post()
  @UsePipes(new ValidationPipe())
  async SignupUser(@Body() user: NewUserDto, @Res() res: Response) {
    const userObject = await this.UsersResolver.getUser(user.email);
    if (userObject)
      throw new HttpException('User already registered', HttpStatus.CONFLICT);
    await this.UsersResolver.newUser(user);
    res.status(201).json('User added successfully');
  }
}
