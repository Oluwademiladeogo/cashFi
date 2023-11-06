import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userModel } from 'models/userschema';
@Injectable()
export class HistoryService {
  async getHistory(email) {
    try {
      const user = await userModel.findOne({ email: email });
      if (!user)
        throw new HttpException('Error getting user details', HttpStatus.BAD_REQUEST);
      return user.history;
    } catch (error) {
      throw new HttpException(
        'Error getting user details',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async insertHistory(email: string, message: string ) {
    try {
      const user = await userModel.findOne({ email: email });
      if (!user)
        throw new HttpException('Error getting user details', HttpStatus.BAD_REQUEST);
      const history = user.history;
      history.push(message);
      user.history = history;
      await user.save();
      return true;
    } catch (error) {
      throw new HttpException(
        'Error with history',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
