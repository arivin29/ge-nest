import { Test, TestingModule } from '@nestjs/testing';
import { PurReturnItemService } from './pur_return_item.service';

describe('PurReturnItemService', () => {
  let service: PurReturnItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurReturnItemService],
    }).compile();

    service = module.get<PurReturnItemService>(PurReturnItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
