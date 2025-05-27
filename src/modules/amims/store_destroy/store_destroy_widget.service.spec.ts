import { Test, TestingModule } from '@nestjs/testing';
import { StoreDestroyWidgetService } from './store_destroy_widget.service';
import { DataSource } from 'typeorm';

describe('StoreDestroyWidgetService', () => {
  let service: StoreDestroyWidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreDestroyWidgetService,
        {
          provide: DataSource,
          useValue: {}, // Mocked DataSource
        },
      ],
    }).compile();

    service = module.get<StoreDestroyWidgetService>(StoreDestroyWidgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
