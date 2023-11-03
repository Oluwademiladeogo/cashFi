import { IsAlpha, IsEmail, IsNumber} from "class-validator";

export class withdrawMoneyDto{
    @IsEmail()
    email:string
    @IsAlpha()
    bankName:string
    @IsNumber()
    accountNumber:number
    @IsNumber()
    pin:number
    @IsNumber()
    amount:number
}    //make custon class validator isbank
