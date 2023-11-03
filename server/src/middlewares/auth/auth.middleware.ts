import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from "jsonwebtoken"
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if(!req.headers.authorization) throw new HttpException("Unauthorised", HttpStatus.UNAUTHORIZED)
    const bearerToken = req.headers.authorization?.split(' ')[1];
    const {error} = jwt.verify(bearerToken, process.env.JWT_SECRET)
    if(error) throw new HttpException("Unauthorised", HttpStatus.UNAUTHORIZED)
    next();
  }
}