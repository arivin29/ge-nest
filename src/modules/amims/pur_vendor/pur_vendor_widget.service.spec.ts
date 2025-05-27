import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorWidgetService } from './pur_vendor_widget.service';
import { DataSource } from 'typeorm';

describe('PurVendorWidgetService', () => {
  let service: PurVendorWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurVendorWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurVendorWidgetService>(PurVendorWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
