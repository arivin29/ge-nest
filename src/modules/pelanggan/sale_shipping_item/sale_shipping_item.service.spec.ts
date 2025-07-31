import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingItemService } from './sale_shipping_item.service';

describe('SaleShippingItemService', () => {
  let service: SaleShippingItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleShippingItemService],
    }).compile();

    service = module.get<SaleShippingItemService>(SaleShippingItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
