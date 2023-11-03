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
import { UsersService } from 'src/services/users/users.service';
import { Response } from 'express';
import { userModel } from 'models/userschema';
@Controller('signup')
export class SignupController {
  constructor(private UsersService: UsersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  async SignupUser(@Body() user: NewUserDto, @Res() res: Response) {
    const userObject = await userModel.findOne({ email: user.email });
    if (userObject)
      throw new HttpException('User already registered', HttpStatus.FOUND);
    try{
      await this.UsersService.newUser(user)
    }
    catch(error){
      throw new HttpException("Error saving user details", HttpStatus.REQUEST_TIMEOUT)
    }
    res.json('User added successfully');
  }
}
 