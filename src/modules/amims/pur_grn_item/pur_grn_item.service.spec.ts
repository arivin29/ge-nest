import { Test, TestingModule } from '@nestjs/testing';
import { PurGrnItemService } from './pur_grn_item.service';

describe('PurGrnItemService', () => {
  let service: PurGrnItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurGrnItemService],
    }).compile();

    service = module.get<PurGrnItemService>(PurGrnItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
