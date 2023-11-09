import { DepositResolver } from './deposit.resolver';
import { DepositService } from 'src/services/deposit/deposit.service';

describe('DepositResolver', () => {
  let resolver: DepositResolver;
  let depositServiceMock: any;

  beforeEach(() => {
    depositServiceMock = jest.mock('src/services/deposit/deposit.service');
    resolver = new DepositResolver(depositServiceMock);
  });

  it('should call the deposit service to deposit data', async () => {
    const data = {
      amount: 100,
      currency: 'USD',
    };

    // Mock the deposit service to return a successful response
    depositServiceMock.depositData.mockResolvedValue(true);

    // Call the resolver
    const result = await resolver.depositData(data);

    // Expect the deposit service to have been called with the correct arguments
    expect(depositServiceMock.depositData).toHaveBeenCalledWith(data);

    // Expect the result to be true
    expect(result).toBe(true);
  });
});
