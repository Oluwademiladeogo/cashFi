import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { transferDto } from '../dtos/transfer.dto';
import { Request, Response } from 'express';
import { compare, getToken, getTokenPayload } from 'src/helpers/auth.helper';
import { UserResolver } from 'src/resolver/user/user.resolver';
import { UsersService } from 'src/services/users/users.service';
import { HistoryService } from 'src/services/history/history.service';

@Controller('transfer')
export class TransferController {
  constructor(
    private usersService: UsersService,
    private userResolver: UserResolver,
    private historyService: HistoryService,
  ) {}
  @Post()
  async transferMoney(
    @Body() data: transferDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const token = await getToken(req);
    const payload = await getTokenPayload(token);
    const me = await this.userResolver.getUser(payload.email);
    const user = await this.userResolver.getUserByNumber(data.number);
    const result = await compare(data.pin, user.pin);
    if (!result) throw new HttpException('Invalid pin', HttpStatus.BAD_REQUEST);
    const aggBal = me.balance + 1000;
    if (data.amount > aggBal)
      throw new HttpException('insufficient funds', HttpStatus.BAD_REQUEST);
    const receiverAmount = user.balance + data.amount;
    const giverAmount = user.balance - data.amount;
    await this.usersService.updateUserBalance(me.id, giverAmount);
    await this.usersService.updateUserBalance(user.id, receiverAmount);
    const date = new Date().toUTCString();
    const message = `Successfully transferred ${data.amount} from ${me.number} to ${data.number} on ${date}`;
    await this.historyService.insertHistory(user.email, message);
    res.send(true);
  }
}
