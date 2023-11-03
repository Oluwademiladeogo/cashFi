import { Body, Controller, Get } from '@nestjs/common';
import { historyDto } from 'src/history/controller/dtos/history.dto';

@Controller('history')
export class HistoryController {
    @Get()
    getUserHistory(@Body() user:historyDto){
        
    }
}
