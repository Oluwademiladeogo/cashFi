import { Module } from '@nestjs/common';
import { SignupController } from './signup/controller/signup/signup.controller';
import { SignupModule } from './signup/signup.module';
import { IndexController } from './index/controller/index/index.controller';
import { UsersService } from './services/users/users.service';
import { LoginController } from './login/controller/login/login.controller';
import { WithdrawController } from './withdraw/controller/withdraw/withdraw.controller';
import { WithdrawService } from './services/withdraw/withdraw.service';
import { HistoryController } from './history/controller/history/history.controller';
import { DepositController } from './deposit/controller/deposit/deposit.controller';
import { DepositService } from './services/deposit/deposit.service';
import { HistoryService } from './services/history/history.service';

@Module({
  imports: [SignupModule],
  controllers: [SignupController, IndexController, LoginController, WithdrawController, HistoryController, DepositController],
  providers: [UsersService, WithdrawService, DepositService, HistoryService],
})
export class AppModule {}
