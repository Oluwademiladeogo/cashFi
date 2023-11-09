import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('')
export class IndexController {
  @Get()
  getIndex(@Res() res: Response) {
    //redirect immediately to dashboard where dashboard checks if auth
    res.redirect('/dashboard');
  }
}
