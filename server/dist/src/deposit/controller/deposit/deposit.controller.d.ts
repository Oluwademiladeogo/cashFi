import { depositDto } from '../dtos/deposit.dto';
import { DepositService } from 'src/services/deposit/deposit.service';
export declare class DepositController {
    private depositService;
    constructor(depositService: DepositService);
    depositMoney(data: depositDto): void;
}
