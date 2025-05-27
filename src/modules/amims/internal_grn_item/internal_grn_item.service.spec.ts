import { Test, TestingModule } from '@nestjs/testing';
import { InternalGrnItemService } from './internal_grn_item.service';

describe('InternalGrnItemService', () => {
  let service: InternalGrnItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalGrnItemService],
    }).compile();

    service = module.get<InternalGrnItemService>(InternalGrnItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
