import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';
import { UsersService } from 'src/services/users/users.service';
import { WithdrawService } from 'src/services/withdraw/withdraw.service';
import { HistoryService } from 'src/services/history/history.service';
import { compare } from 'src/helpers/auth.helper';

@Controller('withdraw')
export class WithdrawController {
  constructor(
    private usersService: UsersService,
    private withdrawService: WithdrawService,
    private historyService: HistoryService
  ) {}
  @UsePipes(new ValidationPipe())
  @Post()
  async doWithdraw(@Body() res: Response, data: withdrawMoneyDto) {
    //if we weren't so pressed for time, I should get another table, more secure to store usr bank, wallet details then link them to regular user table
    //Auth Middleware used
    const user = await this.usersService.getUser(data.email)
    if (!user) return res.json('User not found');
    //Scrapped out for simplicity
    // if (
    //   !this.withdrawService.getBankandAccount(data.accountNumber, data.bankName)
    // )
    //   throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    const result = await compare(data.pin, user.pin)
    if (result)
      throw new HttpException('Invalid pin', HttpStatus.BAD_REQUEST);
    const aggBal = user.balance + 1000;
    if (data.amount > aggBal)
      throw new HttpException('insufficient funds', HttpStatus.BAD_REQUEST);
    const amount = data.amount - user.balance
    this.usersService.updateUserBalance(user.id, amount);
    const message = ""
    this.historyService.insertHistory(user, message)
  }
}
