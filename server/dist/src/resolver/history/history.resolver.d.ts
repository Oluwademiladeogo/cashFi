import { HistoryService } from 'src/services/history/history.service';
export declare class HistoryResolver {
    private readonly HistoryService;
    constructor(HistoryService: HistoryService);
    getHistory(id: string): Promise<[string]>;
    insertHistory(id: string, message: string): Promise<any>;
}
