import { Test, TestingModule } from '@nestjs/testing';
import { DepositService } from './deposit.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { userModel } from 'models/userschema';

describe('DepositService', () => {
  let service: DepositService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = jest.mock('models/userschema');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepositService,
        { provide: userModel, useValue: mockUserModel },
      ],
    }).compile();

    service = module.get<DepositService>(DepositService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if the account is not found', async () => {
    const mockData = { number: 1234567890, amount: 100 };

    mockUserModel.findOne.mockResolvedValue(null);

    expect(async () => await service.depositData(mockData)).toThrowError(new HttpException('Account not found', HttpStatus.BAD_REQUEST));
  });

  it('should deposit the amount into the account if the account is found', async () => {
    const mockData = { number: 1234567890, amount: 100 };
    const mockAccount = { balance: 0, save: jest.fn() };

    mockUserModel.findOne.mockResolvedValue(mockAccount);

    await service.depositData(mockData);

    expect(mockAccount.balance).toEqual(100);
    expect(mockAccount.save).toHaveBeenCalled();
  });
});
