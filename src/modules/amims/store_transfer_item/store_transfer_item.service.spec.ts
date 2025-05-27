import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferItemService } from './store_transfer_item.service';

describe('StoreTransferItemService', () => {
  let service: StoreTransferItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreTransferItemService],
    }).compile();

    service = module.get<StoreTransferItemService>(StoreTransferItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
