import { Test, TestingModule } from '@nestjs/testing';
import { StoreThresholdWidgetService } from './store_threshold_widget.service';
import { DataSource } from 'typeorm';

describe('StoreThresholdWidgetService', () => {
  let service: StoreThresholdWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreThresholdWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<StoreThresholdWidgetService>(StoreThresholdWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
