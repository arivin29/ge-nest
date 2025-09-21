import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInvoiceController } from './purchase_invoice.controller';
import { PurchaseInvoiceService } from './purchase_invoice.service';

describe('PurchaseInvoiceController', () => {
  let controller: PurchaseInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseInvoiceController],
      providers: [
        {
          provide: PurchaseInvoiceService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PurchaseInvoiceController>(PurchaseInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
