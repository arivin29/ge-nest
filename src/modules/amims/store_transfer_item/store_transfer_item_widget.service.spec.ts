import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferItemWidgetService } from './store_transfer_item_widget.service';
import { DataSource } from 'typeorm';

describe('StoreTransferItemWidgetService', () => {
  let service: StoreTransferItemWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreTransferItemWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<StoreTransferItemWidgetService>(StoreTransferItemWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
