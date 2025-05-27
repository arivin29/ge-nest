import { Test, TestingModule } from '@nestjs/testing';
import { StoreDestroyService } from './store_destroy.service';

describe('StoreDestroyService', () => {
  let service: StoreDestroyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreDestroyService],
    }).compile();

    service = module.get<StoreDestroyService>(StoreDestroyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
