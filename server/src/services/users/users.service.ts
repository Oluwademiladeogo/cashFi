import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { encrypt } from 'src/helpers/auth.helper';
import { userModel } from 'models/userschema';
@Injectable()
export class UsersService {
  async newUser(user) {
    const passwordData = await encrypt(user.password);
    const pinData = await encrypt(user.pin);
    const createUser = new userModel({
      username: user.username,
      email: user.email,
      number: user.number,
      pin: pinData.result,
      pinSalt: pinData.salt,
      password: passwordData.result,
      passwordSalt: passwordData.salt,
      balance: 0,
    });
    await createUser.save();
  }
  async getUser(email: string) {
    return await userModel.findOne({ email: email });
  }
  async updateUserBalance(userId: string, amount: number) {
    const user = await userModel.findById(userId);
    if (!user)
      throw new HttpException(
        'Error querying db',
        HttpStatus.EXPECTATION_FAILED,
      );
    user.balance = amount;
    await user.save();
  }
}
