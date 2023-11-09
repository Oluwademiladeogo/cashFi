import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { getToken, getTokenPayload } from 'src/helpers/auth.helper';
import { UserResolver } from 'src/resolver/user/user.resolver';

@Controller('dashboard')
export class DashboardController {
  constructor(private UserResolver: UserResolver) {}
  @Get()
  async getDashboard(@Req() req: Request, @Res() res: Response) {
    const bearerToken = await getToken(req);
    const payload = await getTokenPayload(bearerToken);
    const response = await this.UserResolver.getUser(payload.email);
    if (response)
      res
        .status(200)
        .json({ name: response.username, balance: response.balance });
  }
}
