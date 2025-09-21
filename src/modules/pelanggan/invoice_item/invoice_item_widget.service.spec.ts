import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceItemWidgetService } from './invoice_item_widget.service';
import { DataSource } from 'typeorm';

describe('InvoiceItemWidgetService', () => {
  let service: InvoiceItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvoiceItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<InvoiceItemWidgetService>(InvoiceItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
