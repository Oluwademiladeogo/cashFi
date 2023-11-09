import { Test, TestingModule } from '@nestjs/testing';
import { SignupController } from './signup.controller';
import { NewUserDto } from './dtos/NewUser.dto';
import { UserResolver } from 'src/resolver/user/user.resolver';

describe('SignupController', () => {
  let controller: SignupController;
  let userResolverMock: any;

  beforeEach(async () => {
    userResolverMock = jest.mock('src/resolver/user/user.resolver');

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupController],
      providers: [{ provide: UserResolver, useValue: userResolverMock }],
    }).compile();

    controller = module.get<SignupController>(SignupController);
  });

  it('should throw an error if the user already exists', async () => {
    const user = {
      email: 'john.doe@example.com',
    };

    // Mock the userResolverMock to return a user
    userResolverMock.getUser.mockResolvedValue(user);

    // expect(async () => await controller.SignupUser(user)).toThrowError(new HttpException('User already registered', HttpStatus.CONFLICT));
  });

  it('should create a new user if the user does not exist', async () => {
    const user = {
      email: 'john.doe@example.com',
    };

    // Mock the userResolverMock to return null
    userResolverMock.getUser.mockResolvedValue(null);

    // await controller.SignupUser(user);

    // Expect the userResolverMock to have been called with the correct arguments
    expect(userResolverMock.newUser).toHaveBeenCalledWith(user);
  });
});
