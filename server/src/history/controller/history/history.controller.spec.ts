import { Controller, Get, Req, Res } from '@nestjs/common';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { Response } from 'express';
import { getToken, getTokenPayload } from 'src/helpers/auth.helper';
import { HistoryResolver } from 'src/resolver/history/history.resolver';

@Controller('history')
export class HistoryController {
  constructor(private HistoryResolver: HistoryResolver) {}

  @Get()
  async getUserHistory(@Req() req: Request, @Res() res: Response) {
    const token = await getToken(req);
    const payload = await getTokenPayload(token);
    const history = await this.HistoryResolver.getHistory(payload.email);

    // Mock the response status code and send the history data
    if (history[0]) {
      res.statusCode = 200;
      res.send(history);
    } else {
      res.statusCode = 200;
      res.send('Nothing in history');
    }
  }
}
