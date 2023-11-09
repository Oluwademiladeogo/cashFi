import { HistoryResolver } from './history.resolver';
import { HistoryService } from 'src/services/history/history.service';

describe('HistoryResolver', () => {
  let resolver: HistoryResolver;
  let historyServiceMock: any;

  beforeEach(() => {
    historyServiceMock = jest.mock('src/services/history/history.service');
    resolver = new HistoryResolver(historyServiceMock);
  });

  it('should call the history service to get history', async () => {
    const email = 'john.doe@example.com';

    // Mock the history service to return a successful response
    historyServiceMock.getHistory.mockResolvedValue([
      { message: 'This is a message' },
    ]);

    // Call the resolver
    const result = await resolver.getHistory(email);

    // Expect the history service to have been called with the correct arguments
    expect(historyServiceMock.getHistory).toHaveBeenCalledWith(email);

    // Expect the result to be an array of history objects
    expect(result).toEqual([{ message: 'This is a message' }]);
  });

  it('should call the history service to insert history', async () => {
    const email = 'john.doe@example.com';
    const message = 'This is a message';

    // Mock the history service to return a successful response
    historyServiceMock.insertHistory.mockResolvedValue(true);

    // Call the resolver
    const result = await resolver.insertHistory(email, message);

    // Expect the history service to have been called with the correct arguments
    expect(historyServiceMock.insertHistory).toHaveBeenCalledWith(
      email,
      message,
    );

    // Expect the result to be true
    expect(result).toBe(true);
  });
});
