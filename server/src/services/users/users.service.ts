import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { encrypt } from 'src/helpers/auth.helper';
import { userModel } from 'models/userschema';
@Injectable()
export class UsersService {
  async newUser(user) {
    try {
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
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async getUser(email: string) {
    try {
      return await userModel.findOne({ email: email });
    } catch (error) {
      throw new HttpException(
        'Error getting user details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async getUserByNumber(number: number) {
    try {
      return await userModel.findOne({ number: number });
    } catch (error) {
      throw new HttpException(
        'Error getting user details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async updateUserBalance(userId: string, amount: number) {
    try {
      const user = await userModel.findById(userId);
      if (!user)
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      user.balance = amount;
      await user.save();
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
