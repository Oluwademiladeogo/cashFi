import { depositDto } from '../dtos/deposit.dto';
import { Response } from 'express';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
import { DepositResolver } from 'src/resolver/deposit/deposit.resolver';
import { UserResolver } from 'src/resolver/user/user.resolver';
export declare class DepositController {
    private depositResolver;
    private HistoryResolver;
    private UserResolver;
    constructor(depositResolver: DepositResolver, HistoryResolver: HistoryResolver, UserResolver: UserResolver);
    depositMoney(data: depositDto, res: Response): Promise<void>;
}
