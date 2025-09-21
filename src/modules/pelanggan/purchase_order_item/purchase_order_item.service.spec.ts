import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderItemService } from './purchase_order_item.service';

describe('PurchaseOrderItemService', () => {
  let service: PurchaseOrderItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseOrderItemService],
    }).compile();

    service = module.get<PurchaseOrderItemService>(PurchaseOrderItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
