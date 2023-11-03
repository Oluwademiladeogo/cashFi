import * as mongoose from 'mongoose';
interface users {
    username: string;
    email: string;
    number: number;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
    history: [string];
}
declare const userModel: mongoose.Model<users, {}, {}, {}, mongoose.Document<unknown, {}, users> & users & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { userModel, users };
