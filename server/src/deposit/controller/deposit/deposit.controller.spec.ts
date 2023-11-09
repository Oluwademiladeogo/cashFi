import { Test, TestingModule } from '@nestjs/testing';
import { DepositController } from './deposit.controller';
import { DepositResolver } from 'src/resolver/deposit/deposit.resolver';
import { HistoryResolver } from 'src/resolver/history/history.resolver';
import { UserResolver } from 'src/resolver/user/user.resolver';
import { depositDto } from '../dtos/deposit.dto';
import { Response } from 'express';

jest.mock('src/resolver/deposit/deposit.resolver');
jest.mock('src/resolver/history/history.resolver');
jest.mock('src/resolver/user/user.resolver');

describe('DepositController', () => {
  let depositController: DepositController;
  let depositResolver: DepositResolver;
  let historyResolver: HistoryResolver;
  let userResolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositController],
      providers: [DepositResolver, HistoryResolver, UserResolver],
    }).compile();

    depositController = module.get<DepositController>(DepositController);
    depositResolver = module.get<DepositResolver>(DepositResolver);
    historyResolver = module.get<HistoryResolver>(HistoryResolver);
    userResolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(depositController).toBeDefined();
  });

  it('should deposit money successfully', async () => {
    // Mock the required methods and their responses
    const userData: depositDto = { number: '123', amount: '100' }; // Change number to a string
    const user = { email: 'test@example.com' };
    const date = new Date().toUTCString();

    // Mock the methods with mockResolvedValueOnce
    jest.spyOn(depositResolver, 'depositData').mockResolvedValue(true);
    // jest.spyOn(userResolver, 'getUserByNumber').mockResolvedValue(user);
    jest.spyOn(historyResolver, 'insertHistory').mockResolvedValue(true);

    // Mock Express response
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await depositController.depositMoney(userData, res);

    // Expectations
    expect(userResolver.getUserByNumber).toHaveBeenCalledWith(userData.number);
    expect(depositResolver.depositData).toHaveBeenCalledWith(userData);
    expect(historyResolver.insertHistory).toHaveBeenCalledWith(
      user.email,
      `Successfully deposited ${userData.amount} in ${userData.number} on ${date}`,
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(true);
  });
});
