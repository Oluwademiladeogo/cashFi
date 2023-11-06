import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from 'src/services/users/users.service';

@Resolver()
export class UserResolver {
    constructor (private readonly UserService:UsersService){}
    @Mutation()
    async newUser(user){
        return await this.UserService.newUser(user)
    }
    @Query()
    async getUser(@Args('email') email:string){
        return await this.UserService.getUser(email)
    }
    @Query()
    async getUserByNumber(@Args('number')number:number){
        return await this.UserService.getUserByNumber(number)
    }
    @Mutation()
    async updateUserBalance(@Args("userId") userId:string, @Args("amount") amount:number){
        return await this.UserService.updateUserBalance(userId, amount)
    }
}
