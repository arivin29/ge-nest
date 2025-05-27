import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPrisReturnItemService } from './engineer_pris_return_item.service';

describe('EngineerPrisReturnItemService', () => {
  let service: EngineerPrisReturnItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPrisReturnItemService],
    }).compile();

    service = module.get<EngineerPrisReturnItemService>(EngineerPrisReturnItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
