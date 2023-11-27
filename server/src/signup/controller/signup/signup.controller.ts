import {
  Body,
  Controller,
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
      res.status(409).json({ message: 'User already registered' });
    await this.UsersResolver.newUser(user);
    res.status(201).json({ message: 'User added successfully' });
  }
}
