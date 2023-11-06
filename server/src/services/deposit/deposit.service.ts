import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userModel } from 'models/userschema';
@Injectable()
export class DepositService {
  async depositData(data) {
    const account = await userModel.findOne({ number: data.number });
    if (!account)
      throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    account.balance += data.amount;
    await account.save();
    return true;
  }
}
