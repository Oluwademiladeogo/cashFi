import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
dotenv.config();
const authorization = process.env.JWT_SECRET;
const generateToken = async (user: any) => {
  const payload = {
    id: user.id,
    name: user.username,
    email: user.email,
    number: user.number,
  };
  const token = await jwt.sign(payload, authorization);
  return token;
};
const encrypt = async (password: string) => {
  const salt = await bcrypt.genSalt(13);
  const result = await bcrypt.hash(password, salt);
  return { salt, result };
};
const compare = async (enteredValue: string, hashedValue: string) => {
  try {
    return await bcrypt.compare(enteredValue, hashedValue);
  } catch (error) {
    return false;
  }
};
const getToken = async (req) => {
  try {
    if (!req.headers || !req.headers['authorization'])
      throw new HttpException('Unauthorised', HttpStatus.UNAUTHORIZED);
    const bearerToken = req.headers['authorization']?.split(' ')[1];
    return bearerToken;
  } catch (error) {
    throw new HttpException('Error getting token', HttpStatus.UNAUTHORIZED);
  }
};
const getTokenPayload = async (bearerToken: string) => {
  try {
    const payload = await jwt.verify(bearerToken, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    throw new HttpException('Token error', HttpStatus.UNAUTHORIZED);
  }
};
export { generateToken, encrypt, compare, getToken, getTokenPayload };
