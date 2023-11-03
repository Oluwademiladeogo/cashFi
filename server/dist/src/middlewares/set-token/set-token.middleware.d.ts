import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';
export declare class SetTokenMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
