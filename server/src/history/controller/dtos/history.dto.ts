import { IsOptional, IsString } from "class-validator";

export class historyDto{
    @IsString()
    id:string;
    @IsOptional()
    history:string;
}