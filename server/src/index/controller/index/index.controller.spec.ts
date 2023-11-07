import { Test, TestingModule } from '@nestjs/testing';
import { IndexController } from './index.controller';
import { MockResponse } from 'jest-express-mock';

describe('IndexController', () => {
  let controller: IndexController;
  let mockResponse: MockResponse;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndexController],
    }).compile();

    controller = module.get<IndexController>(IndexController);
    mockResponse = new MockResponse();
  });

  it('should redirect to the dashboard page', async () => {
    // Call the getIndex method
    await controller.getIndex(mockResponse);

    // Expect the response status code to be 302 (redirect)
    expect(mockResponse.status).toBe(302);

    // Expect the response location header to be set to the dashboard page
    expect(mockResponse.headers).toHaveProperty('location', '/dashboard');
  });
});
