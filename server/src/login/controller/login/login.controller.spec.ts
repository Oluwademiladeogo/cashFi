import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { UserResolver } from 'src/resolver/user/user.resolver';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { loginDto } from '../dtos/login.dto';
describe('LoginController', () => {
  let controller: LoginController;
  let userResolverMock: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [
        {
          provide: UserResolver,
          useValue: {
            getUser: jest.fn().mockResolvedValue({
              username: 'John Doe',
              email: 'john.doe@example.com',
              number: '1234567890',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<LoginController>(LoginController);
    userResolverMock = module.get<UserResolver>(UserResolver);
  });

  it('should call the user resolver to get the user', async () => {
    const req = getMockReq();
    req.body = { email: 'john.doe@example.com', password: 'password123' };
    const res:any = getMockRes();

    await controller.loginUser(new loginDto, res);

    // Expect the user resolver mock to have been called with the correct arguments
    expect(userResolverMock.getUser).toHaveBeenCalledWith(req.body.email);
  });
});
