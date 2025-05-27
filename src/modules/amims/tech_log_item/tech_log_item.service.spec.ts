import { Test, TestingModule } from '@nestjs/testing';
import { TechLogItemService } from './tech_log_item.service';

describe('TechLogItemService', () => {
  let service: TechLogItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechLogItemService],
    }).compile();

    service = module.get<TechLogItemService>(TechLogItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
