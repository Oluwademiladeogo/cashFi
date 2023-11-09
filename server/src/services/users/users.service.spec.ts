import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { userModel } from 'models/userschema';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = jest.mock('models/userschema');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: userModel, useValue: mockUserModel },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create a new user', async () => {
    const user = {
      username: 'John Doe',
      email: 'john.doe@example.com',
      number: 1234567890,
      pin: '123456',
      password: 'password123',
    };

    // Mock the userModel to return a successful response
    mockUserModel.save.mockResolvedValue(user);

    // Call the service
    await service.newUser(user);

    // Expect the userModel to have been called with the correct arguments
    expect(mockUserModel.save).toHaveBeenCalledWith({
      username: user.username,
      email: user.email,
      number: user.number,
      pin: user.pin,
      password: user.password,
      balance: 0,
    });
  });

  it('should get a user by email', async () => {
    const email = 'john.doe@example.com';

    // Mock the userModel to return a successful response
    mockUserModel.findOne.mockResolvedValue({
      email,
    });

    // Call the service
    const result = await service.getUser(email);

    // Expect the userModel to have been called with the correct arguments
    expect(mockUserModel.findOne).toHaveBeenCalledWith({ email });

    // Expect the result to be the user
    expect(result).toEqual({
      email,
    });
  });

  it("should update a user's balance", async () => {
    const userId = '1234567890';
    const amount = 100;

    // Mock the userModel to return a successful response
    mockUserModel.findById.mockResolvedValue({
      balance: 0,
    });

    // Call the service
    await service.updateUserBalance(userId, amount);

    // Expect the userModel to have been called with the correct arguments
    expect(mockUserModel.findById).toHaveBeenCalledWith(userId);

    // Expect the user's balance to have been updated
    expect(mockUserModel.balance).toEqual(amount);
  });
});
