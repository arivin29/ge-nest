import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisItemService } from './engineer_pris_item.service';

describe('EngineerPrisItemService', () => {
  let service: EngineerPrisItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPrisItemService],
    }).compile();

    service = module.get<EngineerPrisItemService>(EngineerPrisItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
