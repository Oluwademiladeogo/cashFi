import { NewUserDto } from './dtos/NewUser.dto';
import { UsersService } from 'src/services/users/users.service';
import { Response } from 'express';
export declare class SignupController {
    private UsersService;
    constructor(UsersService: UsersService);
    SignupUser(user: NewUserDto, res: Response): Promise<void>;
}
