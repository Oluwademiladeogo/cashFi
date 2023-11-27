import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';
import { UsersService } from 'src/services/users/users.service';
import { HistoryService } from 'src/services/history/history.service';
import { compare, getToken, getTokenPayload } from 'src/helpers/auth.helper';
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
  async doWithdraw(
    @Body() data: withdrawMoneyDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const token = await getToken(req);
    const payload = await getTokenPayload(token);
    const user = await this.userResolver.getUser(payload.email);
    const amount = parseInt(data.amount);
    const result = await compare(data.pin, user.pin);
    if (!result) return res.status(400).json({ message: 'invalid pin' });
    const aggBal = user.balance + 1000;
    if (amount > aggBal)
      return res.status(400).json({ message: 'insufficient funds' });
    const newamount = user.balance - amount;
    await this.usersService.updateUserBalance(user.id, amount);
    const date = new Date().toUTCString();
    const message = `Successfully withdrew ${newamount} from ${user.number} on ${date}`;

    await this.historyService.insertHistory(user.email, message);
    res.status(200).json({ message: message });
  }
}
