import { IsAlpha, IsEmail} from "class-validator";

export class loginDto{
    @IsEmail()
    email:string
    @IsAlpha()
    password:string
}