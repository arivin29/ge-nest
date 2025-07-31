import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanItemWidgetService } from './sales_penjualan_item_widget.service';
import { DataSource } from 'typeorm';

describe('SalesPenjualanItemWidgetService', () => {
  let service: SalesPenjualanItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesPenjualanItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SalesPenjualanItemWidgetService>(SalesPenjualanItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
