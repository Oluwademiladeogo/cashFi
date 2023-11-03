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
    history: string[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
    history: string[];
}> & {
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
    history: string[];
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
    history: string[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
    history: string[];
}>> & mongoose.FlatRecord<{
    number: number;
    username: string;
    email: string;
    password: string;
    passwordSalt: string;
    pin: string;
    pinSalt: string;
    balance: number;
    history: string[];
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
interface User {
}
export { userModel, User };
