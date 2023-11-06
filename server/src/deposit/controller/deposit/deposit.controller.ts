import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { depositDto } from '../dtos/deposit.dto';
import { Response } from 'express';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
import { DepositResolver } from 'src/resolver/deposit/deposit.resolver';
import { UserResolver } from 'src/resolver/user/user.resolver';

@Controller('deposit')
export class DepositController {
  constructor(
    private depositResolver: DepositResolver,
    private HistoryResolver: HistoryResolver,
    private UserResolver: UserResolver,
  ) {}
  @Post()
  @UsePipes(new ValidationPipe())
  async depositMoney(@Body() data: depositDto, @Res() res: Response) {
    const user = await this.UserResolver.getUserByNumber(data.number);
    const email = user.email;
    await this.depositResolver.depositData(data);
    const date = new Date().toUTCString();
    const message = `Successfully deposited ${data.amount} in ${user.number} on ${date}`;
    await this.HistoryResolver.insertHistory(email, message);
    res.status(200).send(true);
  }
}
