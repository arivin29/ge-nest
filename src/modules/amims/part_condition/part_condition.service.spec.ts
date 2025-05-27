import { Test, TestingModule } from '@nestjs/testing';
import { PartConditionService } from './part_condition.service';

describe('PartConditionService', () => {
  let service: PartConditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartConditionService],
    }).compile();

    service = module.get<PartConditionService>(PartConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
