import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { SignupController } from './controller/signup/signup.controller';
import { AuthMiddleware } from 'src/middlewares/auth/auth.middleware';

@Module({
  controllers: [SignupController],
  providers: [UsersService],
})
export class SignupModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      //can't use middleware in all routes. thinking on scaling
      {
        path: 'withdraw',
        method: RequestMethod.POST,
      },
      { path: 'deposit', method: RequestMethod.POST },
      { path: 'history', method: RequestMethod.GET },
    );
  }
}
