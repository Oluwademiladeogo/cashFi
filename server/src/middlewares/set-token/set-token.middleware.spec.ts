import { SetTokenMiddleware } from './set-token.middleware';

describe('SetTokenMiddleware', () => {
  it('should be defined', () => {
    expect(new SetTokenMiddleware()).toBeDefined();
  });
});
