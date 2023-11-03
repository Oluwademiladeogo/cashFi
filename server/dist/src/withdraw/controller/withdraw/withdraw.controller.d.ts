import { Response } from 'express';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';
import { UsersService } from 'src/services/users/users.service';
import { WithdrawService } from 'src/services/withdraw/withdraw.service';
import { HistoryService } from 'src/services/history/history.service';
export declare class WithdrawController {
    private usersService;
    private withdrawService;
    private historyService;
    constructor(usersService: UsersService, withdrawService: WithdrawService, historyService: HistoryService);
    doWithdraw(res: Response, data: withdrawMoneyDto): Promise<Response<any, Record<string, any>>>;
}
