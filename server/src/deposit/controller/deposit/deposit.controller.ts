import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { depositDto } from '../dtos/deposit.dto';
import { DepositService } from 'src/services/deposit/deposit.service';

@Controller('deposit')
export class DepositController {
    constructor(private depositService:DepositService){}
    @Post()
    @UsePipes(new ValidationPipe())
    depositMoney(@Body() data:depositDto){
        this.depositService.depositData(data)
    }
}
