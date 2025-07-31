import { Test, TestingModule } from '@nestjs/testing';
import { SalesPenjualanWidgetService } from './sales_penjualan_widget.service';
import { DataSource } from 'typeorm';

describe('SalesPenjualanWidgetService', () => {
  let service: SalesPenjualanWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesPenjualanWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SalesPenjualanWidgetService>(SalesPenjualanWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
