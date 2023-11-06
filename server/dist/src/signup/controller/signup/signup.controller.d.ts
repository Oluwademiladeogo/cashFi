import { NewUserDto } from './dtos/NewUser.dto';
import { Response } from 'express';
import { UserResolver } from 'src/resolver/user/user.resolver';
export declare class SignupController {
    private UsersResolver;
    constructor(UsersResolver: UserResolver);
    SignupUser(user: NewUserDto, res: Response): Promise<void>;
}
