import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { depositDto } from '../dtos/deposit.dto';
import { DepositService } from 'src/services/deposit/deposit.service';
import { HistoryService } from 'src/services/history/history.service';
import { Response } from 'express';

@Controller('deposit')
export class DepositController {
    constructor(private depositService:DepositService, private HistoryService:HistoryService){}
    @Post()
    @UsePipes(new ValidationPipe())
    async depositMoney(@Body() data:depositDto, res:Response){
        //get user from token
        const id = ''
        await this.depositService.depositData(data)
        const message = ""
        await this.HistoryService.insertHistory(id, message)
        res.send("Done")
    }
}
