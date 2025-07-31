import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanItemService } from './sales_penjualan_item.service';

describe('SalesPenjualanItemService', () => {
  let service: SalesPenjualanItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesPenjualanItemService],
    }).compile();

    service = module.get<SalesPenjualanItemService>(SalesPenjualanItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
