import { DepositService } from 'src/services/deposit/deposit.service';
export declare class DepositResolver {
    private readonly DepositService;
    constructor(DepositService: DepositService);
    depositData(data: any): Promise<boolean>;
}
