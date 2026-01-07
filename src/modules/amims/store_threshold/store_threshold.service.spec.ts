import { Test, TestingModule } from '@nestjs/testing';
import { StoreThresholdService } from './store_threshold.service';

describe('StoreThresholdService', () => {
  let service: StoreThresholdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreThresholdService],
    }).compile();

    service = module.get<StoreThresholdService>(StoreThresholdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
