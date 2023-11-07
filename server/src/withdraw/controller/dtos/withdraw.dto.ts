import { IsNotEmpty, Length } from 'class-validator';

export class withdrawMoneyDto {
  @IsNotEmpty()
  number: string;
  @Length(6, 6)
  pin: string;
  @IsNotEmpty()
  amount: string;
}
