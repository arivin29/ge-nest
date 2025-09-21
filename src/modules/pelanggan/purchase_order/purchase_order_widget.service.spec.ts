import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderWidgetService } from './purchase_order_widget.service';
import { DataSource } from 'typeorm';

describe('PurchaseOrderWidgetService', () => {
  let service: PurchaseOrderWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseOrderWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurchaseOrderWidgetService>(PurchaseOrderWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
