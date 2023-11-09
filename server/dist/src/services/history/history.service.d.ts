export declare class HistoryService {
    getHistory(email: any): Promise<false | [string]>;
    insertHistory(email: string, message: string): Promise<boolean>;
}
