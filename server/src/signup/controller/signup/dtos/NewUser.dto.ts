import { IsAlpha, IsNumber, IsEmail, IsPhoneNumber, IsStrongPassword} from "class-validator";

export class NewUserDto{
    @IsAlpha()
    username:string;
    @IsEmail()
    email:string;    
    @IsPhoneNumber("NG")
    number: number
    @IsStrongPassword()
    password:string
    @IsNumber()
    pin:number
}