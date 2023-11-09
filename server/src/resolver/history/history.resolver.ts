import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { HistoryService } from 'src/services/history/history.service';

@Resolver()
export class HistoryResolver {
  constructor(private readonly HistoryService: HistoryService) {}
  @Query()
  async getHistory(@Args('email') email: string) {
    return await this.HistoryService.getHistory(email);
  }
  @Mutation()
  async insertHistory(
    @Args('email') email: string,
    @Args('message') message: string,
  ) {
    return await this.HistoryService.insertHistory(email, message);
  }
}
