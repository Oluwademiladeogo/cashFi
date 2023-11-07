import { Test, TestingModule } from '@nestjs/testing';
import { TransferController } from './transfer.controller';
import { transferDto } from '../dtos/transfer.dto';

describe('TransferController', () => {
  let controller: TransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferController],
    }).compile();

    controller = module.get<TransferController>(TransferController);
  });

  it('should transfer money if the data is valid', async () => {
    const data = {
      number: '1234567890',
      amount: 1000,
      pin: '123456',
    };

    // await controller.transferMoney(data, data.amount, data.pin);

    // Expect the controller to have been called with the correct arguments
    expect(controller.transferMoney).toHaveBeenCalledWith(data);
  });
});
