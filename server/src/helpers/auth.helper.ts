import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
const authorization = process.env.JWT_SECRET;
const generateToken = async (user: any) => {
  console.log(authorization, 'auth');
  const payload = {
    id: user.id,
    name: user.username,
    email: user.email,
    number: user.number,
  };
  const token = await jwt.sign(payload, authorization);
  return token;
};
const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(13);
  const result = await bcrypt.hash(password, salt);
  return { salt, result };
};
const compare = async (enteredValue, hashedValue) => {
  return await bcrypt.compare(enteredValue, hashedValue);
};
export { generateToken, encrypt, compare };
