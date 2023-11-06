export declare class HistoryService {
    getHistory(email: any): Promise<[string]>;
    insertHistory(email: string, message: string): Promise<boolean>;
}
