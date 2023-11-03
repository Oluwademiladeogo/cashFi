import { depositDto } from '../dtos/deposit.dto';
import { DepositService } from 'src/services/deposit/deposit.service';
import { HistoryService } from 'src/services/history/history.service';
import { Response } from 'express';
export declare class DepositController {
    private depositService;
    private HistoryService;
    constructor(depositService: DepositService, HistoryService: HistoryService);
    depositMoney(data: depositDto, res: Response): Promise<void>;
}
