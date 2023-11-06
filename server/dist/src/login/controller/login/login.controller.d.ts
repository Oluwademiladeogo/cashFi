import { loginDto } from '../dtos/login.dto';
import { Response } from 'express';
import { UserResolver } from 'src/resolver/user/user.resolver';
export declare class LoginController {
    private UserResolver;
    constructor(UserResolver: UserResolver);
    loginUser(user: loginDto, res: Response): Promise<void>;
}
