import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { HistoryService } from 'src/services/history/history.service';

@Resolver()
export class HistoryResolver {
  constructor(private readonly HistoryService: HistoryService) {}
  @Query()
  async getHistory(@Args('id') id: string) {
    return await this.HistoryService.getHistory(id);
  }
  @Mutation()
  async insertHistory(
    @Args('id') id: string,
    @Args('message') message: string,
  ) {
    return await this.HistoryService.insertHistory(id, message);
  }
}
