import { Controller, Get, Req, Res } from '@nestjs/common';
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
    if (history[0]) {
      res.status(200).send(history);
    } else {
      res.status(200).send('Nothing in history');
    }
  }
}
