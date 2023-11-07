import { IsNotEmpty, IsNumber } from 'class-validator';

export class depositDto {
  @IsNotEmpty()
  number: string;
  @IsNotEmpty()
  amount: string;
}
