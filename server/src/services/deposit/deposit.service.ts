import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userModel } from 'models/userschema';

@Injectable()
export class DepositService {
  async depositData(data) {
    try {
      const account = await userModel.findOne({ number: data.accountNumber });
      if (!account)
        throw new HttpException('Account not found', HttpStatus.BAD_REQUEST);
      account.balance += data.balance;
      await account.save();
      return 'done';
    } catch (error) {
      return error;
    }
  }
}
