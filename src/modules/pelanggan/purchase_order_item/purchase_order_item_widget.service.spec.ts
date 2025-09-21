import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseOrderItemWidgetService } from './purchase_order_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurchaseOrderItemWidgetService', () => {
  let service: PurchaseOrderItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseOrderItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurchaseOrderItemWidgetService>(PurchaseOrderItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
