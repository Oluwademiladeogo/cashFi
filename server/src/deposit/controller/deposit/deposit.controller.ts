import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { depositDto } from '../dtos/deposit.dto';
import { Response } from 'express';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
import { DepositResolver } from 'src/resolver/deposit/deposit.resolver';

@Controller('deposit')
export class DepositController {
    constructor(private depositResolver:DepositResolver, private HistoryResolver:HistoryResolver){}
    @Post()
    @UsePipes(new ValidationPipe())
    async depositMoney(@Body() data:depositDto, res:Response){
        //get user from token
        const id = ''
        await this.depositResolver.depositData(data)
        const message = ""
        await this.HistoryResolver.insertHistory(id, message)
        res.send("Done")
    }
}
