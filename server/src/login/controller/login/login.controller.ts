import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { loginDto } from '../dtos/login.dto';
import { Response } from 'express';
import { UsersService } from 'src/services/users/users.service';
import { generateToken } from 'src/helpers/auth.helper';

@Controller('login')
export class LoginController {
    constructor(private UserService: UsersService){}
    @UsePipes(new ValidationPipe())
    @Post()
    async loginUser(@Body() user:loginDto, @Res() res:Response){
        //isauth not used but will reset headers
        const dbRes = await this.UserService.getUser(user.email)
        const dbUser = {
            username: dbRes.username,
            email: dbRes.email,
            number: dbRes.number
        }
        const token = await generateToken(dbUser)
        //setheaders
        res.send("Done")
    }
}
