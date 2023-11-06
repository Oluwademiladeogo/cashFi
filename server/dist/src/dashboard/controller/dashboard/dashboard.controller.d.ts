import { Response } from 'express';
import { UserResolver } from 'src/resolver/user/user.resolver';
export declare class DashboardController {
    private UserResolver;
    constructor(UserResolver: UserResolver);
    getDashboard(req: Request, res: Response): Promise<void>;
}
