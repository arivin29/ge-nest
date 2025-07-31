import { Test, TestingModule } from '@nestjs/testing';
import { SalesBarangWidgetService } from './sales_barang_widget.service';
import { DataSource } from 'typeorm';

describe('SalesBarangWidgetService', () => {
  let service: SalesBarangWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesBarangWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<SalesBarangWidgetService>(SalesBarangWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
