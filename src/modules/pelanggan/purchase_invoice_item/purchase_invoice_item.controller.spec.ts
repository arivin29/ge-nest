import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInvoiceItemController } from './purchase_invoice_item.controller';
import { PurchaseInvoiceItemService } from './purchase_invoice_item.service';

describe('PurchaseInvoiceItemController', () => {
  let controller: PurchaseInvoiceItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseInvoiceItemController],
      providers: [
        {
          provide: PurchaseInvoiceItemService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurchaseInvoiceItemController>(PurchaseInvoiceItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
