export declare class HistoryService {
    getHistory(id: any): Promise<[string]>;
    insertHistory(id: any, message: string): Promise<any>;
}
