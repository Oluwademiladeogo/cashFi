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
const userModel = mongoose.model<users>(
  'users',
  new mongoose.Schema({
    username: {
      type: String,
      min: 3,
      max: 200,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    number: {
      type: Number,
      minlength: 5,
      maxlength: 20,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 5,
      maxlength: 1024,
      required: true,
    },
    passwordSalt: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      minlength: 5,
      maxlength: 1024,
      required: true,
    },
    pinSalt: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    history: [String, Object],
  }),
);
export { userModel, users };