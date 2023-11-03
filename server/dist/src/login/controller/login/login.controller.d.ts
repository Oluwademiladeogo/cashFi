import { loginDto } from '../dtos/login.dto';
import { Response } from 'express';
import { UsersService } from 'src/services/users/users.service';
export declare class LoginController {
    private UserService;
    constructor(UserService: UsersService);
    loginUser(user: loginDto, res: Response): Promise<void>;
}
