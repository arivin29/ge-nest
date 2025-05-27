import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferService } from './store_transfer.service';

describe('StoreTransferService', () => {
  let service: StoreTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreTransferService],
    }).compile();

    service = module.get<StoreTransferService>(StoreTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
