import { Test, TestingModule } from '@nestjs/testing';
import { PurPrItemService } from './pur_pr_item.service';

describe('PurPrItemService', () => {
  let service: PurPrItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurPrItemService],
    }).compile();

    service = module.get<PurPrItemService>(PurPrItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
