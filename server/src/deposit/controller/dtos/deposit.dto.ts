import { IsAlpha, IsNumber } from 'class-validator';

export class depositDto {
  @IsNumber()
  accountNumber: number;
  @IsAlpha()
  bankName: number;
}
