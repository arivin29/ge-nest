import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorItemWidgetService } from './pur_vendor_item_widget.service';
import { DataSource } from 'typeorm';

describe('PurVendorItemWidgetService', () => {
  let service: PurVendorItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurVendorItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurVendorItemWidgetService>(PurVendorItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
