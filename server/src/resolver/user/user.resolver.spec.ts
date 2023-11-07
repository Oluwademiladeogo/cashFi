import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UsersService } from 'src/services/users/users.service';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let userServiceMock: any;

  beforeEach(async () => {
    userServiceMock = jest.mock('src/services/users/users.service');
    resolver = new UserResolver(userServiceMock);
  });

  it('should call the UserService to get a user by number', async () => {
    const number = 1234567890;

    // Mock the UserService to return a successful response
    userServiceMock.getUserByNumber.mockResolvedValue({
      number,
    });

    // Call the resolver
    const result = await resolver.getUserByNumber(number);

    // Expect the UserService to have been called with the correct arguments
    expect(userServiceMock.getUserByNumber).toHaveBeenCalledWith(number);

    // Expect the result to be the user
    expect(result).toEqual({
      number,
    });
  });
});
