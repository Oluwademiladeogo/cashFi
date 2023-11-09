import { AuthMiddleware } from './auth.middleware';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

describe('AuthMiddleware', () => {
  let middleware: AuthMiddleware;
  let nextSpy: jest.Mock;

  beforeEach(() => {
    middleware = new AuthMiddleware();
    nextSpy = jest.fn();
  });

  it('should throw an error if the middleware is called', () => {
    expect(() => middleware.use(null, null, nextSpy)).toThrow(
      new HttpException('Unauthorised', HttpStatus.UNAUTHORIZED),
    );
  });
});
