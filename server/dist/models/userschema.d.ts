import * as mongoose from 'mongoose';
declare const userModel: mongoose.Model<{
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
}> & {
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
}>> & mongoose.FlatRecord<{
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export { userModel };
