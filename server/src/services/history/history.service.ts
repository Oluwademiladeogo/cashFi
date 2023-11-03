import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userModel } from 'models/userschema';
@Injectable()
export class HistoryService {
  async getHistory(id) {
    const user =  await userModel.findOne({ id: id });
    if(!user) throw new HttpException("User not found", HttpStatus.BAD_REQUEST)
    return user.history
  }
  async insertHistory(id, message: string) {
    try{
        const user = await userModel.findOne({ id: id });
    const history = user.history;
    history.push(message);
    user.history = history;
    await user.save();
    return 'done';
    }
    catch(error){
        return error;
    }
  }
}
