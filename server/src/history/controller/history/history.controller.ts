import { Body, Controller, Get, Post } from '@nestjs/common';
import { Response } from 'express';
import { historyDto } from 'src/history/controller/dtos/history.dto';
import { HistoryService } from 'src/services/history/history.service';
@Controller('history')
export class HistoryController {
    constructor(private HistoryService:HistoryService){}
    @Get()
    async getUserHistory(@Body() user:historyDto, res:Response){
        //get user from token
        const history = await this.HistoryService.getHistory(user.id)
        res.send(history)
    }
}
