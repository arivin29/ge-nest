import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorItemService } from './pur_vendor_item.service';

describe('PurVendorItemService', () => {
  let service: PurVendorItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurVendorItemService],
    }).compile();

    service = module.get<PurVendorItemService>(PurVendorItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
