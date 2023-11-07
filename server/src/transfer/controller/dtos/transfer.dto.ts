import { IsNotEmpty, Length} from "class-validator";

export class transferDto{
    @IsNotEmpty()
    number:string
    @Length(6, 6)
    pin: string;
    @IsNotEmpty()
    amount:string
}   
