import { HistoryService } from 'src/services/history/history.service';
export declare class HistoryResolver {
    private readonly HistoryService;
    constructor(HistoryService: HistoryService);
    getHistory(email: string): Promise<[string]>;
    insertHistory(email: string, message: string): Promise<boolean>;
}
