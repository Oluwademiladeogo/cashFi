import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DepositService } from 'src/services/deposit/deposit.service';

@Resolver()
export class DepositResolver {
    constructor(private readonly DepositService:DepositService){}
    @Mutation()
    async depositData(@Args('data') data:any){
        return await this.DepositService.depositData(data)
    }
}
