import { Test, TestingModule } from '@nestjs/testing';
import { PurVendorContactWidgetService } from './pur_vendor_contact_widget.service';
import { DataSource } from 'typeorm';

describe('PurVendorContactWidgetService', () => {
  let service: PurVendorContactWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurVendorContactWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<PurVendorContactWidgetService>(PurVendorContactWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
