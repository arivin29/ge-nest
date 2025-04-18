import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceWidgetService } from './invoice_widget.service';
import { DataSource } from 'typeorm';

describe('InvoiceWidgetService', () => {
  let service: InvoiceWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InvoiceWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<InvoiceWidgetService>(InvoiceWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
