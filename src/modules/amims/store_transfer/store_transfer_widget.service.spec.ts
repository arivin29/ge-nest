import { Test, TestingModule } from '@nestjs/testing';
import { StoreTransferWidgetService } from './store_transfer_widget.service';
import { DataSource } from 'typeorm';

describe('StoreTransferWidgetService', () => {
  let service: StoreTransferWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreTransferWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<StoreTransferWidgetService>(StoreTransferWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
