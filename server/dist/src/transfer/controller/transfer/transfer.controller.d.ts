import { transferDto } from '../dtos/transfer.dto';
import { Request, Response } from 'express';
import { UserResolver } from 'src/resolver/user/user.resolver';
import { UsersService } from 'src/services/users/users.service';
import { HistoryService } from 'src/services/history/history.service';
export declare class TransferController {
    private usersService;
    private userResolver;
    private historyService;
    constructor(usersService: UsersService, userResolver: UserResolver, historyService: HistoryService);
    transferMoney(data: transferDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
