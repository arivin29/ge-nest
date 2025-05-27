import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferService } from './qa_transfer.service';

describe('QaTransferService', () => {
  let service: QaTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaTransferService],
    }).compile();

    service = module.get<QaTransferService>(QaTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
