import { Response } from 'express';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
export declare class HistoryController {
    private HistoryResolver;
    constructor(HistoryResolver: HistoryResolver);
    getUserHistory(req: Request, res: Response): Promise<void>;
}
