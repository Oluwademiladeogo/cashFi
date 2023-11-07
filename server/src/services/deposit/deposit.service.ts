import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userModel } from 'models/userschema';
@Injectable()
export class DepositService {
  async depositData(data) {
    const num = parseInt(data.number)
     const amount = parseInt(data.amount)
    const account = await userModel.findOne({ number: num });
    if (!account)
      throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
    account.balance += amount;
    await account.save();
    return true;
  }
}
