import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingItemWidgetService } from './sale_shipping_item_widget.service';
import { DataSource } from 'typeorm';

describe('SaleShippingItemWidgetService', () => {
  let service: SaleShippingItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaleShippingItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SaleShippingItemWidgetService>(SaleShippingItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
