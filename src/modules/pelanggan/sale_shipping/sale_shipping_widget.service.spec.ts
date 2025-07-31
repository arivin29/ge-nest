import { Test, TestingModule } from '@nestjs/testing';
import { SaleShippingWidgetService } from './sale_shipping_widget.service';
import { DataSource } from 'typeorm';

describe('SaleShippingWidgetService', () => {
  let service: SaleShippingWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaleShippingWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SaleShippingWidgetService>(SaleShippingWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
