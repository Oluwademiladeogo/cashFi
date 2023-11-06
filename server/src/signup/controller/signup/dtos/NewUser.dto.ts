import {
  Length,
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  Matches,
} from 'class-validator';

export class NewUserDto {
  @IsEmail()
  email: string;
  @IsPhoneNumber('NG')
  number: number;
  @IsStrongPassword()
  password: string;
  @Length(6, 6)
  pin: string;
  @Matches(/^(?=[A-Za-z])([A-Za-z]+\s?)*$/, {
    message: 'Username must be alphabetic with optional spaces.',
  })
  username: string;
}
