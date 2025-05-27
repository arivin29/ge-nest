import { Test, TestingModule } from '@nestjs/testing';
import { QaTransferItemService } from './qa_transfer_item.service';

describe('QaTransferItemService', () => {
  let service: QaTransferItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaTransferItemService],
    }).compile();

    service = module.get<QaTransferItemService>(QaTransferItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
