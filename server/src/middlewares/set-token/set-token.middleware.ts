import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class SetTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    next();
  }
}
