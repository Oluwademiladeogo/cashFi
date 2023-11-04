import { Body, Controller, Get, Post } from '@nestjs/common';
import { Response } from 'express';
import { historyDto } from 'src/history/controller/dtos/history.dto';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
@Controller('history')
export class HistoryController {
    constructor(private HistoryResolver:HistoryResolver){}
    @Get()
    async getUserHistory(@Body() user:historyDto, res:Response){
        //get user from token
        const history = await this.HistoryResolver.getHistory(user.id)
        res.send(history)
    }
}
