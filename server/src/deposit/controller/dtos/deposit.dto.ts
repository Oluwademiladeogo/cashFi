import { IsAlpha, IsNumber } from 'class-validator';

export class depositDto {
  @IsNumber()
  number: number;
  @IsNumber()
  amount: number;
}
