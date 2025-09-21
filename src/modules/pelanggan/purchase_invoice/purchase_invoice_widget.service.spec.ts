import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseInvoiceWidgetService } from './purchase_invoice_widget.service';
import { DataSource } from 'typeorm';

describe('PurchaseInvoiceWidgetService', () => {
  let service: PurchaseInvoiceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseInvoiceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurchaseInvoiceWidgetService>(PurchaseInvoiceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
