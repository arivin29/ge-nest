import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInvoiceItemWidgetService } from './purchase_invoice_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurchaseInvoiceItemWidgetService', () => {
  let service: PurchaseInvoiceItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseInvoiceItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurchaseInvoiceItemWidgetService>(PurchaseInvoiceItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
