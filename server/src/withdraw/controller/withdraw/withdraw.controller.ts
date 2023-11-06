import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';
import { UsersService } from 'src/services/users/users.service';
import { HistoryService } from 'src/services/history/history.service';
import { compare } from 'src/helpers/auth.helper';
import { UserResolver } from 'src/resolver/user/user.resolver';

@Controller('withdraw')
export class WithdrawController {
  constructor(
    private usersService: UsersService,
    private historyService: HistoryService,
    private userResolver: UserResolver,
  ) {}
  @UsePipes(new ValidationPipe())
  @Post()
  async doWithdraw(@Body() data: withdrawMoneyDto, @Res() res: Response) {
    const user = await this.userResolver.getUserByNumber(data.number);
    const result = await compare(data.pin, user.pin);
    if (!result) throw new HttpException('Invalid pin', HttpStatus.BAD_REQUEST);
    const aggBal = user.balance + 1000;
    if (data.amount > aggBal)
      throw new HttpException('insufficient funds', HttpStatus.BAD_REQUEST);
    const amount = user.balance - data.amount;
    await this.usersService.updateUserBalance(user.id, amount);
    const date = new Date().toUTCString();
   const message = `Successfully withdrew ${amount} from ${user.number} on ${date}`;

    await this.historyService.insertHistory(user.email, message);
    res.status(200).send(true);
  }
}
