import { Module } from '@nestjs/common';
import { SignupController } from './signup/controller/signup/signup.controller';
import { SignupModule } from './signup/signup.module';
import { IndexController } from './index/controller/index/index.controller';
import { UsersService } from './services/users/users.service';
import { LoginController } from './login/controller/login/login.controller';
import { WithdrawController } from './withdraw/controller/withdraw/withdraw.controller';
import { HistoryController } from './history/controller/history/history.controller';
import { DepositController } from './deposit/controller/deposit/deposit.controller';
import { DepositService } from './services/deposit/deposit.service';
import { HistoryService } from './services/history/history.service';
import { UserResolver } from './resolver/user/user.resolver';
import { DepositResolver } from './resolver/deposit/deposit.resolver';
import { HistoryResolver } from './resolver/history/history.resolver';
import { ConfigModule } from '@nestjs/config';
import { DashboardController } from './dashboard/controller/dashboard/dashboard.controller';
import { TransferController } from './transfer/controller/transfer/transfer.controller';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to Mongodb');
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SignupModule,
  ],
  controllers: [
    SignupController,
    IndexController,
    LoginController,
    WithdrawController,
    HistoryController,
    DepositController,
    DashboardController,
    TransferController,
  ],
  providers: [
    UsersService,
    DepositService,
    HistoryService,
    UserResolver,
    DepositResolver,
    HistoryResolver,
  ],
})
export class AppModule {}
