import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInvoiceItemService } from './purchase_invoice_item.service';

describe('PurchaseInvoiceItemService', () => {
  let service: PurchaseInvoiceItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseInvoiceItemService],
    }).compile();

    service = module.get<PurchaseInvoiceItemService>(PurchaseInvoiceItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
