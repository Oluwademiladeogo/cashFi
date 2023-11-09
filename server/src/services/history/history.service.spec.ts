import { Test, TestingModule } from '@nestjs/testing';
import { HistoryService } from './history.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { userModel } from 'models/userschema';

describe('HistoryService', () => {
  let service: HistoryService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = jest.mock('models/userschema');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistoryService,
        { provide: userModel, useValue: mockUserModel },
      ],
    }).compile();

    service = module.get<HistoryService>(HistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if the user is not found', async () => {
    const mockEmail = 'user@example.com';

    mockUserModel.findOne.mockResolvedValue(null);

    expect(async () => await service.getHistory(mockEmail)).toThrowError(
      new HttpException('Error getting user details', HttpStatus.BAD_REQUEST),
    );
  });

  it("should return the user's history if the user is found", async () => {
    const mockEmail = 'user@example.com';
    const mockHistory = [
      'Successfully withdrew 100 from 1234567890 on 2023-11-06T21:56:42.000Z',
    ];
    const mockUser = { history: mockHistory };

    mockUserModel.findOne.mockResolvedValue(mockUser);

    const history = await service.getHistory(mockEmail);

    expect(history).toEqual(mockHistory);
  });

  it('should throw an error if the user is not found when inserting history', async () => {
    const mockEmail = 'user@example.com';
    const mockMessage =
      'Successfully withdrew 100 from 1234567890 on 2023-11-06T21:56:42.000Z';

    mockUserModel.findOne.mockResolvedValue(null);

    expect(
      async () => await service.insertHistory(mockEmail, mockMessage),
    ).toThrowError(
      new HttpException('Error getting user details', HttpStatus.BAD_REQUEST),
    );
  });

  it("should insert the message into the user's history if the user is found", async () => {
    const mockEmail = 'user@example.com';
    const mockMessage =
      'Successfully withdrew 100 from 1234567890 on 2023-11-06T21:56:42.000Z';
    const mockUser = { history: [] };

    mockUserModel.findOne.mockResolvedValue(mockUser);

    await service.insertHistory(mockEmail, mockMessage);

    expect(mockUser.history.length).toEqual(1);
    expect(mockUser.history[0]).toEqual(mockMessage);
  });
});
