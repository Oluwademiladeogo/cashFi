import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawController } from './withdraw.controller';
import { withdrawMoneyDto } from '../dtos/withdraw.dto';

describe('WithdrawController', () => {
  let controller: WithdrawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawController],
    }).compile();

    controller = module.get<WithdrawController>(WithdrawController);
  });

  it('should withdraw money if the data is valid', async () => {
    const data: withdrawMoneyDto = {
      number: '1234567890',
      amount: '1000',
      pin: '123456',
    };
    const res: any = true;
    const req: any = true;
    await controller.doWithdraw(data, req, res);

    // Expect the controller to have been called with the correct arguments
    expect(controller.doWithdraw).toHaveBeenCalledWith(data);
  });
});
