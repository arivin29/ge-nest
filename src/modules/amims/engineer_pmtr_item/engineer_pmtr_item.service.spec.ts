import { Test, TestingModule } from '@nestjs/testing';
import { EngineerPmtrItemService } from './engineer_pmtr_item.service';

describe('EngineerPmtrItemService', () => {
  let service: EngineerPmtrItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerPmtrItemService],
    }).compile();

    service = module.get<EngineerPmtrItemService>(EngineerPmtrItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
