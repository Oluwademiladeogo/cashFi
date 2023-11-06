import { Response } from 'express';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';
import { UsersService } from 'src/services/users/users.service';
import { HistoryService } from 'src/services/history/history.service';
import { UserResolver } from 'src/resolver/user/user.resolver';
export declare class WithdrawController {
    private usersService;
    private historyService;
    private userResolver;
    constructor(usersService: UsersService, historyService: HistoryService, userResolver: UserResolver);
    doWithdraw(data: withdrawMoneyDto, res: Response): Promise<void>;
}
