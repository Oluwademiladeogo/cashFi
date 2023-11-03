import { Response } from 'express';
import { historyDto } from 'src/history/controller/dtos/history.dto';
import { HistoryService } from 'src/services/history/history.service';
export declare class HistoryController {
    private HistoryService;
    constructor(HistoryService: HistoryService);
    getUserHistory(user: historyDto, res: Response): Promise<void>;
}
