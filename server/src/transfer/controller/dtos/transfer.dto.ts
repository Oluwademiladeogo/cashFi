import { IsNumber, Length} from "class-validator";

export class transferDto{
    @IsNumber()
    number:number
    @Length(6, 6)
    pin: string;
    @IsNumber()
    amount:number
}   
