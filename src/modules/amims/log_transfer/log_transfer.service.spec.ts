import { Test, TestingModule } from '@nestjs/testing';
import { LogTransferService } from './log_transfer.service';

describe('LogTransferService', () => {
  let service: LogTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogTransferService],
    }).compile();

    service = module.get<LogTransferService>(LogTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
